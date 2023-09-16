import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class LogInUserDto extends PartialType(CreateUserDto) {
    refreshToken: string;
    LastLoggedInDate: Date;
}