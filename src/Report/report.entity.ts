import { CalculationType } from "src/CalculationTypes/calculationTypes.entity";
import { Item } from "src/Items/item.entity";
import { Proof } from "src/Proof/proof.entity";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from "typeorm";

@Entity("report")
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({name: 'report_date'})
    ReportDate: Date;

    @Column({name: 'eligibility_start_date'})
    EligibilityStartDate: Date;

    @Column({name: 'eligibility_end_date'})
    EligibilityEndDate: Date;

    @Column()
    total:number;
    
    @OneToOne(() => CalculationType, (calcType) => calcType.id)
    @JoinColumn({name: 'calc_type_id'})
    Type: CalculationType;

    @OneToMany(() => Proof, (proof) => proof.Report,
    {
        cascade: true,
    })
    @JoinColumn({name: 'id'})
    Proof: Proof[]

    @OneToMany(() => Item, (item) => item.Report,
    {
        cascade: true,
    })
    @JoinColumn({name: 'id'})
    Item: Item[]
}