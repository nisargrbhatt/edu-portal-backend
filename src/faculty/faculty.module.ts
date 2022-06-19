import { Module } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { FacultyResolver } from './faculty.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [FacultyResolver, FacultyService, PrismaService],
})
export class FacultyModule {}
