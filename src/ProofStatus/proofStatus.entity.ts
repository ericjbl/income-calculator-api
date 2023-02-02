import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("proofstatus")
export class ProofStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    // @OneToMany(() => , (photo) => photo.user)
    // photos: Photo[]
}