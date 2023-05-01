import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {CandidateSubmissionModule} from "./candidate-submission/candidate-submission.module";
import {AuthModule} from "./authentication/auth.module";
import {UserModule} from "./user/user.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateSubmission } from './candidate-submission/candidate-submission.entity';
import { User } from "./user/user.entity";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [UserModule,
    CandidateSubmissionModule,
    AuthModule,
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '..', 'client', 'dist'),
  }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'toor',
      database: 'candidate',
      entities: [CandidateSubmission, User],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TypeOrmModule.forFeature([CandidateSubmission, User])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
