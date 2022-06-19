import { Injectable } from '@nestjs/common';
import { AdminDepartmentCreateInput } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department-create.input';
import { AdminDepartmentUpdateInput } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department-update.input';
import { AdminDepartmentWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department-where-unique.input';
import { AdminDepartmentWhereInput } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminDepartmentService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAdminDepartmentInput: AdminDepartmentCreateInput | any) {
    return this.prisma.adminDepartment.create({
      data: createAdminDepartmentInput,
    });
  }

  findAll(condition?: AdminDepartmentWhereInput) {
    return this.prisma.adminDepartment.findMany({
      where: condition,
    });
  }

  findOne(id: AdminDepartmentWhereUniqueInput) {
    return this.prisma.adminDepartment.findUnique({
      where: id,
    });
  }

  update(
    id: AdminDepartmentWhereUniqueInput,
    updateAdminDepartmentInput: AdminDepartmentUpdateInput | any,
  ) {
    return this.prisma.adminDepartment.update({
      where: id,
      data: updateAdminDepartmentInput,
    });
  }

  remove(id: AdminDepartmentWhereUniqueInput) {
    return `This action removes a #${id} adminDepartment`;
  }
}
