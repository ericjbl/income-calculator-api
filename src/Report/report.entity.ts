import { CalculationType } from "src/CalculationTypes/calculationTypes.entity";
import { Item } from "src/Items/item.entity";
import { Proof } from "src/Proof/proof.entity";
import { ReportStatus } from "src/ReportStatus/reportStatus.entity";
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

    @Column()
    result:string;

    @Column()
    percentage:number;

    @OneToOne(() => CalculationType, (calcType) => calcType.id)
    @JoinColumn({name: 'calc_type_id'})
    Type: CalculationType;

    @OneToOne(() => ReportStatus, (status) => status.id)
    @JoinColumn({name: 'reportstatusid'})
    Status: ReportStatus;

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