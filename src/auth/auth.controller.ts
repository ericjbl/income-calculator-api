import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { request } from 'express';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { JwtRefreshGuard } from './authRefresh.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

    @UseGuards(AuthGuard)
    @Get('logout')
    logout(@Request() req) {
      return this.authService.logout(req.user.username);
    }

    @UseGuards(JwtRefreshGuard)
    @Get('refresh')
    getRefresh(@Request() req) {
      return this.authService.refreshTokens(req.user.username, req.user.refreshToken);
    }

    @UseGuards(AuthGuard)
    @Post('firstLogInReset')
    firstLogInReset(@Request() req, @Body() body: { oldPassword: string, newPassword: string }) {
        return this.authService.firstLogInResetPassword(req.user.username, body.oldPassword, body.newPassword);
    }
}
