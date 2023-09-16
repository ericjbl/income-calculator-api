import { ItemProof } from "src/ItemProof/ItemProof.entity";
import { Item } from "src/Items/item.entity";
import { ProofStatus } from "src/ProofStatus/proofStatus.entity";
import { ProofTypes } from "src/ProofTypes/proofTypes.entity";
import { Report } from "src/Report/report.entity";

export class CreateProof {
    Status: ProofStatus;
    Type: ProofTypes;
    Report: Report;
    // ItemProof: ItemProof;
    StatusId: number;
    TypeId: number;
    ReportId: number;
    // ItemProofId: number;
    total: number;
    Delete: boolean;
}