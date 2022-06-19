import { Module } from '@nestjs/common';
import { AdminTypeService } from './admin-type.service';
import { AdminTypeResolver } from './admin-type.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AdminTypeResolver, AdminTypeService, PrismaService],
})
export class AdminTypeModule {}
