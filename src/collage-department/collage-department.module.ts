import { Module } from '@nestjs/common';
import { CollageDepartmentService } from './collage-department.service';
import { CollageDepartmentResolver } from './collage-department.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    CollageDepartmentResolver,
    CollageDepartmentService,
    PrismaService,
  ],
})
export class CollageDepartmentModule {}
