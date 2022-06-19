import { Module } from '@nestjs/common';
import { AdminDepartmentService } from './admin-department.service';
import { AdminDepartmentResolver } from './admin-department.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AdminDepartmentResolver, AdminDepartmentService, PrismaService],
})
export class AdminDepartmentModule {}
