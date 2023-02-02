import { ItemRoles } from "src/ItemRoles/itemRoles.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity("item")
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "item"})
    Item: string;

    @ManyToOne(() => ItemRoles, (role) => role.id)
    @JoinColumn({name: 'role_id'})
    Role: ItemRoles
}