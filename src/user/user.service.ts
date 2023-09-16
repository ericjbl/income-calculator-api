import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { Equal, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LogInUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(UserRole) private userRoleRepository: Repository<UserRole>,
  ) {}
  async create(createUserDto: CreateUserDto) : Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10)
    createUserDto.Role = await this.userRoleRepository.findOne({ where: {roleId: Equal(createUserDto.role_id)} })
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find({
      select: ["userId","firstName","lastName","username","email","Role","Reports","createdAt","LastLoggedInDate","HasLoggedIn", "active"],
      relations: {
        Role: true,
        Reports: {
          Status: true
        },
      }
    });
  }

  async findOne(username: string) {
    const user = await this.userRepository.findOne({ where: { username: username }, relations:['Role'] })
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id,updateUserDto);
  }

  loggedIn(id: number, loginUserDto: LogInUserDto) {
    return this.userRepository.update(id,loginUserDto);
  }

  async firstLogInPasswordReset(id: number, newPassword: string) {
    const hashNewPassword = await bcrypt.hash(newPassword, 10)
    return this.userRepository.update(id,{ password: hashNewPassword, HasLoggedIn: true});
  }

  logout(id: number) {
    return this.userRepository.update(id,{refreshToken: null})
  }

  remove(id: number) {
    return this.userRepository.update(id, { active: false })
  }

  async forgotPassword(userId: number, password: string) {
    const user = await this.userRepository.find({ where: {userId: userId}});
    if (!user) {
        throw new UnauthorizedException('User does not exists.')
    }
    try {
      const newPassword = await bcrypt.hash(password, 10)
      this.userRepository.update(userId, { password: newPassword, HasLoggedIn: false });
      return {status: "success", message: "Password reset successful."}
    } catch (error) {
      console.log(error)
      return { status: "error", message: error}
    }
}
}
