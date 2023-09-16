import { Report } from "src/Report/report.entity"

export class CreateItem {
    Item: string
    ItemUID: string
    roleId: number
    Report: Report
    ReportId: number
    ProofId: string
    delete: boolean
}