import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateItemProof } from "./dto/createItemProof.dto";
import { ItemProof } from "./ItemProof.entity";
import { ItemProofService } from "./itemProof.service";

@Controller('/itemproof')
export class ItemProofController {
    constructor(private readonly service: ItemProofService) {}

    @Get('/:prooftId')
    getProof(@Param('proofId') proofId: number): Promise<ItemProof []> {
        return this.service.getAllItemsByProof(proofId)
    }

    @Post('/add')
    addProof(@Body() proof: CreateItemProof) {
        return this.service.add(proof)
    }

    @Put('/update/:id')
    updateProof(@Param() id: number, @Body() proof: CreateItemProof) {
        return this.service.update(proof,id)
    }

}