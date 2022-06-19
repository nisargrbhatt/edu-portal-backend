import { Injectable } from '@nestjs/common';
import { AdminTypeCreateInput } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type-create.input';
import { AdminTypeUpdateInput } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type-update.input';
import { AdminTypeWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type-where-unique.input';
import { AdminTypeWhereInput } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminTypeService {
  constructor(private prisma: PrismaService) {}

  create(createAdminTypeInput: AdminTypeCreateInput | any) {
    return this.prisma.adminType.create({ data: createAdminTypeInput });
  }

  findAll(condition?: AdminTypeWhereInput) {
    return this.prisma.adminType.findMany({ where: condition });
  }

  findOne(id: AdminTypeWhereUniqueInput) {
    return this.prisma.adminType.findUnique({ where: id });
  }

  update(
    id: AdminTypeWhereUniqueInput,
    updateAdminTypeInput: AdminTypeUpdateInput | any,
  ) {
    return this.prisma.adminType.update({
      data: updateAdminTypeInput,
      where: id,
    });
  }

  remove(id: AdminTypeWhereUniqueInput) {
    return this.prisma.adminType.delete({
      where: id,
    });
  }
}
