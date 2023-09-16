import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserRoleDto {
    @Field()
    role: string;

    @Field()
    description: string;

    @Field()
    active: boolean;
}
