import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateProof } from "./dto/createProof.dto";
import { Proof } from "./proof.entity";
import { ProofService } from "./proof.service";

@Controller('/proof')
@UseGuards(AuthGuard)
export class ProofController {
    constructor(private readonly service: ProofService) {}

    @Get('/:reportId')
    getProof(@Param('reportId') reportId: number): Promise<Proof []> {
        return this.service.getAllProofByReport(reportId)
    }

    @Post('/add')
    addProof(@Body() proof: CreateProof) {
        return this.service.add(proof)
    }

    @Put('/update/:id')
    updateProof(@Param() id: number, @Body() proof: CreateProof) {
        return this.service.update(proof,id)
    }

    @Put('/delete/:id')
    deleteProof(@Param() id: number) {
        return this.service.delete(id)
    }

}