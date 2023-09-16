import { CalculationType } from "src/CalculationTypes/calculationTypes.entity";
import { Item } from "src/Items/item.entity";
import { Proof } from "src/Proof/proof.entity";
import { ReportStatus } from "src/ReportStatus/reportStatus.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";

@Entity("report")
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({name: 'lastname'})
    lastName: string;

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

    @Column({ name: 'updateat', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

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

    @ManyToOne(() => User, (user) => user.Reports, {
        cascade: true,
    })
    @JoinColumn({ name: 'userid' })
    User: User

    @ManyToOne(() => User, (user) => user.UpdatedReports, {
        cascade: true,
    })
    @JoinColumn({ name: 'updateby' })
    UpdatedBy: User
}