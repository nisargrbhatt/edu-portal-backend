import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleResolver } from './module.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ModuleResolver, ModuleService, PrismaService],
})
export class ModuleModule {}
