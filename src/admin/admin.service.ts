import { Injectable } from '@nestjs/common';
import { AdminCreateInput } from 'src/@generated/prisma-nestjs-graphql/admin/admin-create.input';
import { AdminUpdateInput } from 'src/@generated/prisma-nestjs-graphql/admin/admin-update.input';
import { AdminWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/admin/admin-where-unique.input';
import { AdminWhereInput } from 'src/@generated/prisma-nestjs-graphql/admin/admin-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  create(createAdminInput: AdminCreateInput | any) {
    return this.prisma.admin.create({
      data: createAdminInput,
    });
  }

  findAll(condition?: AdminWhereInput) {
    return this.prisma.admin.findMany({
      where: condition,
    });
  }

  findOne(id: AdminWhereUniqueInput) {
    return this.prisma.admin.findUnique({
      where: id,
    });
  }

  update(id: AdminWhereUniqueInput, updateAdminInput: AdminUpdateInput | any) {
    return this.prisma.admin.update({
      data: updateAdminInput,
      where: id,
    });
  }

  remove(id: AdminWhereUniqueInput) {
    return this.prisma.admin.delete({
      where: id,
    });
  }
}
