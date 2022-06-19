import { Injectable } from '@nestjs/common';
import { FacultyTypeCreateInput } from 'src/@generated/prisma-nestjs-graphql/faculty-type/faculty-type-create.input';
import { FacultyTypeWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/faculty-type/faculty-type-where-unique.input';
import { FacultyTypeWhereInput } from 'src/@generated/prisma-nestjs-graphql/faculty-type/faculty-type-where.input';
import { FacultyUpdateInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-update.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FacultyTypeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFacultyTypeInput: FacultyTypeCreateInput | any) {
    return this.prisma.facultyType.create({
      data: createFacultyTypeInput,
    });
  }

  findAll(condition?: FacultyTypeWhereInput) {
    return this.prisma.facultyType.findMany({
      where: condition,
    });
  }

  findOne(id: FacultyTypeWhereUniqueInput) {
    return this.prisma.facultyType.findUnique({ where: id });
  }

  update(
    id: FacultyTypeWhereUniqueInput,
    updateFacultyTypeInput: FacultyUpdateInput | any,
  ) {
    return this.prisma.facultyType.update({
      where: id,
      data: updateFacultyTypeInput,
    });
  }

  remove(id: FacultyTypeWhereUniqueInput) {
    return this.prisma.facultyType.delete({
      where: id,
    });
  }
}
