import { CalculationType } from "src/CalculationTypes/calculationTypes.entity";
import { ReportStatus } from "src/ReportStatus/reportStatus.entity";

export class CreateReport {
    name: string;
    ReportDate: Date | string;
    EligibilityStartDate: Date | string;
    EligibilityEndDate: Date | string;
    TypeId: number;
    Type: CalculationType;
    total: number;
    result: string;
    percentage: number;
    reportStatusId: number;
    Status: ReportStatus
}