import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateItemProof } from "./dto/createItemProof.dto";
import { ItemProof } from "./ItemProof.entity";
import { ItemProofService } from "./itemProof.service";

@Controller('/itemproof')
@UseGuards(AuthGuard)
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


    @Put('/delete/:id')
    deleteProof(@Param() id: number) {
        return this.service.delete(id)
    }

}