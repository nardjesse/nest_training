import { Module } from '@nestjs/common';
import { CandidateSubmissionController } from "./candidate-submission.controller";
import {CandidateSubmissionService} from "./candidate-submission.service";
import { CandidateSubmission} from "./candidate-submission.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CandidateSubmission])],
    providers: [CandidateSubmissionService],
    controllers: [CandidateSubmissionController],
})
export class CandidateSubmissionModule {}
