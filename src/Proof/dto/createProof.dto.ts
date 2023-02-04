import { Item } from "src/Items/item.entity";
import { ProofStatus } from "src/ProofStatus/proofStatus.entity";
import { ProofTypes } from "src/ProofTypes/proofTypes.entity";
import { Report } from "src/Report/report.entity";

export class CreateProof {
    proof: number;
    StartDate: Date | string;
    EndDate: Date | string;
    Status: ProofStatus;
    Type: ProofTypes;
    Report: Report;
    Item: Item;
    StatusId: number;
    TypeId: number;
    ReportId: number;
    ItemId: number;
    total: number;
}