import { CalculationType } from "src/CalculationTypes/calculationTypes.entity";

export class CreateReport {
    name: string;
    ReportDate: Date | string;
    EligibilityStartDate: Date | string;
    EligibilityEndDate: Date | string;
    TypeId: number;
    Type: CalculationType;
    total: number;
}