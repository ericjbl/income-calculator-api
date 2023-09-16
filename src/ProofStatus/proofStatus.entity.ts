import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("proofstatus")
@ObjectType()
export class ProofStatus {
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    status: string;

}