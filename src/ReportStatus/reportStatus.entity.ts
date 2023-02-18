import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("reportstatus")
export class ReportStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "report_status"})
    ReportStatus: string;
}