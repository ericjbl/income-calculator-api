import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("calculationtypes")
export class CalculationType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "calc_type"})
    CalculationType: string;
}