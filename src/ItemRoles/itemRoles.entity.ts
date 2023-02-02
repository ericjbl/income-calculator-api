import { Item } from "src/Items/item.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("itemroles")
export class ItemRoles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "item_role"})
    ItemRole: string;

    @OneToMany(() => Item, (item) => item.Role,
    {
        cascade: true,
    })
    Items: Item []

}