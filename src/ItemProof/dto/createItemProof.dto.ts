import { Item } from "src/Items/item.entity";
import { Proof } from "src/Proof/proof.entity";

export class CreateItemProof {
    proof: number;
    StartDate: Date | string;
    EndDate: Date | string;
    Item: Item;
    ItemId: number;
    total: number;
    Proof: Proof;
    ProofId: number;
}