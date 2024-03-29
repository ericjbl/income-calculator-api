import { ItemRoles } from "src/ItemRoles/itemRoles.entity";
import { Report } from "src/Report/report.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity("item")
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "item"})
    Item: string;

    @Column({name: "itemuid"})
    ItemUID: string;

    @Column()
    delete: boolean;

    @Column({name: "proofid"})
    ProofId: number;

    @ManyToOne(() => ItemRoles, (role) => role.id)
    @JoinColumn({name: 'role_id'})
    Role: ItemRoles;

    @ManyToOne(() => Report, (report) => report.id)
    @JoinColumn({name: 'report_id'})
    Report: Report;
}