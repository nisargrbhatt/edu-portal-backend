import { Injectable } from '@nestjs/common';
import { StudentCreateInput } from 'src/@generated/prisma-nestjs-graphql/student/student-create.input';
import { StudentUpdateInput } from 'src/@generated/prisma-nestjs-graphql/student/student-update.input';
import { StudentWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/student/student-where-unique.input';
import { StudentWhereInput } from 'src/@generated/prisma-nestjs-graphql/student/student-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  create(createStudentInput: StudentCreateInput | any) {
    return this.prisma.student.create({ data: createStudentInput });
  }

  findAll(condition?: StudentWhereInput) {
    return this.prisma.student.findMany({
      where: condition,
    });
  }

  findOne(id: StudentWhereUniqueInput) {
    return this.prisma.student.findUnique({ where: id });
  }

  update(
    id: StudentWhereUniqueInput,
    updateStudentInput: StudentUpdateInput | any,
  ) {
    return this.prisma.student.update({
      data: updateStudentInput,
      where: id,
    });
  }

  remove(id: StudentWhereUniqueInput) {
    return this.prisma.student.delete({ where: id });
  }
}
