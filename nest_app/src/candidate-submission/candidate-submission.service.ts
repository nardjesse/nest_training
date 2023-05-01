import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CandidateSubmission } from "./candidate-submission.entity";

@Injectable()
export class CandidateSubmissionService {
    constructor(
        @InjectRepository(CandidateSubmission)
        private readonly candidateSubmissionRepository: Repository<CandidateSubmission>,
    ) {}

    async getAll(userId: number): Promise<CandidateSubmission[]> {
        return this.candidateSubmissionRepository.find({ where: { userId: userId },
            relations: ['userId'] });
    }

    async addCandidateSubmission(candidateSubmission: CandidateSubmission): Promise<CandidateSubmission> {
        candidateSubmission.userId = 1;
        return this.candidateSubmissionRepository.save(candidateSubmission);
    }
}
