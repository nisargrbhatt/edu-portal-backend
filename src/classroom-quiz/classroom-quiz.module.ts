import { Module } from '@nestjs/common';
import { ClassroomQuizService } from './classroom-quiz.service';
import { ClassroomQuizResolver } from './classroom-quiz.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ClassroomQuizResolver, ClassroomQuizService, PrismaService],
})
export class ClassroomQuizModule {}
