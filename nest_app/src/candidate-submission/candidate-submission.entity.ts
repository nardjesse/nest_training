import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class CandidateSubmission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({ default: '' })
    jobTitle: string;

    @Column()
    note: string;

    @Column({ default: '' })
    cvPath: string;

    @CreateDateColumn()
    createTime: Date;

    @UpdateDateColumn()
    updateTime: Date;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'userId' })
    userId: number;
}
