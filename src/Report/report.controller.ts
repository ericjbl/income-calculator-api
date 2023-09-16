import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateReport } from "./dto/createReport.dto";
import { Report } from "./report.entity";
import { ReportService } from "./report.service";


@Controller('/report')
@UseGuards(AuthGuard)
export class ReportController {
    constructor(private readonly service: ReportService) {}

    @Get()
    getReports(): Promise<Report []> {
        return this.service.getAll()
    }

    @Get('/:reportId')
    getReportByID(@Param('reportId') reportId: number): Promise<Report> {
        return this.service.getByID(reportId)
    }

    @Post('/add')
    addProof(@Body() report: CreateReport) {
        return this.service.add(report)
    }

    @Put('/update/:id')
    updateProof(@Param('id') id: number, @Body() report: CreateReport) {
        return this.service.updateReport(report,id)
    }

}