import { CalculationType } from "src/CalculationTypes/calculationTypes.entity";
import { ReportStatus } from "src/ReportStatus/reportStatus.entity";
import { User } from "src/user/entities/user.entity";

export class CreateReport {
    name: string;
    lastName: string;
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
    userId: string;
    User: User;
    updateby: string;
    UpdatedBy: User;
}