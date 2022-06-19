import { Module } from '@nestjs/common';
import { FacultyTypeService } from './faculty-type.service';
import { FacultyTypeResolver } from './faculty-type.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [FacultyTypeResolver, FacultyTypeService, PrismaService],
})
export class FacultyTypeModule {}
