import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('userroles')
@ObjectType()
export class UserRole {
    @Field(type => Int)
    @PrimaryGeneratedColumn({name: 'id'})
    roleId: Number;

    @Field()
    @Column()
    role: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    active: boolean;

}
