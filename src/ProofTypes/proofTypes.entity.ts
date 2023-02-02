import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("prooftypes")
export class ProofTypes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "proof_type"})
    ProofType: string;
}