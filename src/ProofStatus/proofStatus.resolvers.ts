import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { ProofStatus } from "./proofStatus.entity";
import { ProofStatusService } from "./proofStatus.service";

@Resolver(of => ProofStatus)
export class ProofStatusResolver {
  constructor(
    private proofStatusService: ProofStatusService,
  ) {}

  @Query(returns => [ProofStatus])
  async proofStatus() {
    return await this.proofStatusService.getAll();
  }

  @Query(returns => ProofStatus) 
  async proofStatusById(@Args('id',{ type: () => Int}) id: number) {
      return this.proofStatusService.getById(id)
  }

}