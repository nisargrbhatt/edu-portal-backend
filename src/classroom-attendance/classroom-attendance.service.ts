import { Injectable } from '@nestjs/common';
import { ClassroomAttendanceCreateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance-create.input';
import { ClassroomAttendanceUpdateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance-update.input';
import { ClassroomAttendanceWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance-where-unique.input';
import { ClassroomAttendanceWhereInput } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassroomAttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClassroomAttendanceInput: ClassroomAttendanceCreateInput | any) {
    return this.prisma.classroomAttendance.create({
      data: createClassroomAttendanceInput,
    });
  }

  findAll(condition?: ClassroomAttendanceWhereInput) {
    return this.prisma.classroomAttendance.findMany({
      where: condition,
    });
  }

  findOne(id: ClassroomAttendanceWhereUniqueInput) {
    return this.prisma.classroomAttendance.findUnique({
      where: id,
    });
  }

  update(
    id: ClassroomAttendanceWhereUniqueInput,
    updateClassroomAttendanceInput: ClassroomAttendanceUpdateInput | any,
  ) {
    return this.prisma.classroomAttendance.update({
      data: updateClassroomAttendanceInput,
      where: id,
    });
  }

  remove(id: ClassroomAttendanceWhereUniqueInput) {
    return this.prisma.classroomAttendance.delete({
      where: id,
    });
  }
}
