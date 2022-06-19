import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ModuleCreateInput } from 'src/@generated/prisma-nestjs-graphql/module/module-create.input';
import { ModuleWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/module/module-where-unique.input';
import { ModuleWhereInput } from 'src/@generated/prisma-nestjs-graphql/module/module-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModuleService {
  constructor(private readonly prisma: PrismaService) {}
  create(createModuleInput: ModuleCreateInput) {
    return this.prisma.module.create({
      data: createModuleInput,
    });
  }

  findAll(condition?: ModuleWhereInput) {
    return this.prisma.module.findMany({
      where: condition,
    });
  }

  findOne(id: ModuleWhereUniqueInput) {
    return this.prisma.module.findUnique({
      where: id,
    });
  }

  update(
    id: ModuleWhereUniqueInput,
    updateModuleInput: Prisma.ModuleUpdateInput,
  ) {
    return this.prisma.module.update({
      data: updateModuleInput,
      where: id,
    });
  }

  remove(id: ModuleWhereUniqueInput) {
    return this.prisma.module.delete({
      where: id,
    });
  }
}
