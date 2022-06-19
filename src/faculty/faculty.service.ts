import { Injectable } from '@nestjs/common';
import { FacultyCreateInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-create.input';
import { FacultyUpdateInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-update.input';
import { FacultyWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-where-unique.input';
import { FacultyWhereInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FacultyService {
  constructor(private prisma: PrismaService) {}
  create(createFacultyInput: FacultyCreateInput | any) {
    return this.prisma.faculty.create({
      data: createFacultyInput,
    });
  }

  findAll(condition?: FacultyWhereInput) {
    return this.prisma.faculty.findMany({
      where: condition,
      include: {
        admin: true,
      },
    });
  }

  findOne(id: FacultyWhereUniqueInput) {
    return this.prisma.faculty.findUnique({
      where: id,
      include: {
        admin: true,
      },
    });
  }

  update(
    id: FacultyWhereUniqueInput,
    updateFacultyInput: FacultyUpdateInput | any,
  ) {
    return this.prisma.faculty.update({
      where: id,
      data: updateFacultyInput,
    });
  }

  remove(id: FacultyWhereUniqueInput) {
    return this.prisma.faculty.delete({
      where: id,
    });
  }
}
