import { Body, Controller, Get, Param, Post, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from "./fileStorage";
import { Request } from 'express';
import { CandidateSubmissionService } from './candidate-submission.service';

@Controller('submission')
export class CandidateSubmissionController {
    constructor(private readonly candidateSubmissionService: CandidateSubmissionService) {}

    @Get(':userId')
    getAll(@Param() params) {
        return this.candidateSubmissionService.getAll(1);
    }

    @Post()
    addCandidateSubmission(@Body() candidateSubmissionDto: any) {
        return this.candidateSubmissionService.addCandidateSubmission(candidateSubmissionDto);
    }

    @Post('uploadFile')
    @UseInterceptors(FileInterceptor('file', {storage}))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
        return file.path;
    }
}
