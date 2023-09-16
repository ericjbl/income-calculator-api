import { Item } from "src/Items/item.entity";
import { Proof } from "src/Proof/proof.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('itemproof')
export class ItemProof {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    proof: number;

    @Column()
    total: number;

    @Column()
    delete: boolean;

    @Column({name: 'start_date'})
    StartDate: Date;

    @Column({name: 'end_date'})
    EndDate: Date;

    @ManyToOne(() => Proof, (proof) => proof.id)
    @JoinColumn({name: 'proof_id'})
    Proof: Proof;

    @ManyToOne(() => Item, (item) => item.ProofId)
    @JoinColumn({name: 'item_id'})
    Item: Item;
}