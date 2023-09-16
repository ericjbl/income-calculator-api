import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();

const signRefreshOptions : JwtSignOptions = {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: '12h',
}

const signOptions : JwtSignOptions = {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h', //20m
}

@Injectable()
export class AuthService {
    constructor (
        private usersService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (!user) {
            throw new UnauthorizedException('User does not exists.')
        }
        const isMacth = await bcrypt.compare(pass, user.password)
        if (!isMacth) {
            throw new UnauthorizedException('Incorrect Password');
        }

        const payload = {username: user.username, email: user.email, roles: user.Role, hasLoggedIn: user.HasLoggedIn, name: user.firstName + ' ' + user.lastName}
        const refreshPayload = {username: user.username}
        const refresh_token = await this.jwtService.signAsync(refreshPayload, signRefreshOptions)
        this.usersService.loggedIn(user.userId,{refreshToken: refresh_token, LastLoggedInDate: new Date()})
        return {
            ...payload,
            // IsAuthenticated: true,
            // hasLoggedIn: user.HasLoggedIn,
            access_token: await this.jwtService.signAsync(payload, signOptions),
            refresh_token
        };
    }

    async refreshTokens(username: string, refreshToken: string) {
        const user = await this.usersService.findOne(username);
        if (!user || !user.refreshToken)
          throw new ForbiddenException('Access Denied');
        const refreshTokenMatches = user.refreshToken === refreshToken
        if (!refreshTokenMatches) throw new ForbiddenException('Invalid Token');

        const payload = {username: user.username, email: user.email, roles: user.Role, hasLoggedIn: user.HasLoggedIn, name: user.firstName + ' ' + user.lastName}
        const refreshPayload = {username: user.username}
        const refresh_token = await this.jwtService.signAsync(refreshPayload, signRefreshOptions)
        this.usersService.loggedIn(user.userId,{refreshToken: refresh_token, LastLoggedInDate: new Date()})
        return {
            ...payload,
            access_token: await this.jwtService.signAsync(payload, signOptions),
            refresh_token
        };
    }

    async firstLogInResetPassword(username: string, oldPassword: string, newPassword: string) {
        const user = await this.usersService.findOne(username);
        if (!user) {
            throw new UnauthorizedException('User does not exists.')
        }
        const isMacth = await bcrypt.compare(oldPassword, user.password)
        const isMacthNew = await bcrypt.compare(newPassword, user.password)
        if (!isMacth) {
            throw new UnauthorizedException('Incorrect old Password');
        }
        if (isMacthNew) {
            throw new UnauthorizedException('New Password can\'t be the same as previous.');
        }
        if(user.HasLoggedIn) {
            throw new UnauthorizedException('User has already logged in.')
        }
        try {
            this.usersService.firstLogInPasswordReset(user.userId, newPassword);
            return {status: "success", message: "Password reset successful."}
        } catch (error) {
            console.log(error)
            return { status: "error", message: error}
        }
    }

    async logout(username: string) {
        const user = await this.usersService.findOne(username);
        try {
            this.usersService.logout(user.userId)
            return {status: "success", message: "logout successful."}
        } catch (error) {
            console.log(error)
            return { status: "error", message: error}
        }
    }
    
}
