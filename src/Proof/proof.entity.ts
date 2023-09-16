import { Field, Int } from "@nestjs/graphql";
import { ItemProof } from "src/ItemProof/ItemProof.entity";
import { ProofStatus } from "src/ProofStatus/proofStatus.entity";
import { ProofTypes } from "src/ProofTypes/proofTypes.entity";
import { Report } from "src/Report/report.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('proof')
export class Proof {
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column({ name: 'delete' })
    Delete: Boolean

    @OneToOne(() => ProofStatus, (status) => status.id)
    @JoinColumn({name: 'status_id'})
    Status: ProofStatus;

    @OneToOne(() => ProofTypes, (type) => type.id)
    @JoinColumn({name: 'proof_type_id'})
    Type: ProofTypes;

    @ManyToOne(() => Report, (report) => report.id)
    @JoinColumn({name: 'report_id'})
    Report: Report;

    @OneToMany(() => ItemProof, (itemProof) => itemProof.Proof,
    {
        cascade: true,
    })
    @JoinColumn({name: 'id'})
    ItemProof: ItemProof[]


}