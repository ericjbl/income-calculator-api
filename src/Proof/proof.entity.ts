import { Item } from "src/Items/item.entity";
import { ProofStatus } from "src/ProofStatus/proofStatus.entity";
import { ProofTypes } from "src/ProofTypes/proofTypes.entity";
import { Report } from "src/Report/report.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('proof')
export class Proof {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    proof: number;

    @Column({name: 'start_date'})
    StartDate: Date;

    @Column({name: 'end_date'})
    EndDate: Date;

    @OneToOne(() => ProofStatus, (status) => status.id)
    @JoinColumn({name: 'status_id'})
    Status: ProofStatus;

    @OneToOne(() => ProofTypes, (type) => type.id)
    @JoinColumn({name: 'proof_type_id'})
    Type: ProofTypes;

    @ManyToOne(() => Report, (report) => report.id)
    @JoinColumn({name: 'report_id'})
    Report: Report;

    @ManyToOne(() => Item, (item) => item.id)
    @JoinColumn({name: 'item_id'})
    Item: Item;
}