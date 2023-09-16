import { PartialType } from '@nestjs/mapped-types';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    password: string;
    email: string;
    Role: UserRole;
}
