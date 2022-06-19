import { Module } from '@nestjs/common';
import { ClassroomSessionService } from './classroom-session.service';
import { ClassroomSessionResolver } from './classroom-session.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ClassroomSessionResolver, ClassroomSessionService, PrismaService],
})
export class ClassroomSessionModule {}
