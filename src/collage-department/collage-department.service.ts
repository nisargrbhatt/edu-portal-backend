import { Injectable } from '@nestjs/common';
import { CollageDepartmentCreateInput } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department-create.input';
import { CollageDepartmentUpdateInput } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department-update.input';
import { CollageDepartmentWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department-where-unique.input';
import { CollageDepartmentWhereInput } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollageDepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCollageDepartmentInput: CollageDepartmentCreateInput | any) {
    return this.prisma.collageDepartment.create({
      data: createCollageDepartmentInput,
    });
  }

  findAll(condition?: CollageDepartmentWhereInput) {
    return this.prisma.collageDepartment.findMany({
      where: condition,
    });
  }

  findOne(id: CollageDepartmentWhereUniqueInput) {
    return this.prisma.collageDepartment.findUnique({
      where: id,
    });
  }

  update(
    id: CollageDepartmentWhereUniqueInput,
    updateCollageDepartmentInput: CollageDepartmentUpdateInput | any,
  ) {
    return this.prisma.collageDepartment.update({
      data: updateCollageDepartmentInput,
      where: id,
    });
  }

  remove(id: CollageDepartmentWhereUniqueInput) {
    return this.prisma.collageDepartment.delete({
      where: id,
    });
  }
}
