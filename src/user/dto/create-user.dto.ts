import { Field, InputType, Int  } from "@nestjs/graphql";
import { UserRole } from "src/user-role/entities/user-role.entity";

@InputType()
export class CreateUserDto {
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;

    // @Field(type => UserRole)
    Role: UserRole;

    @Field(type => Int)
    role_id: number;

    @Field()
    active: boolean;

}
