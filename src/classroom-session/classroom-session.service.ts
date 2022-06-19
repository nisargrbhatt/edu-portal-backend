import { Injectable } from '@nestjs/common';
import { ClassroomSessionCreateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session-create.input';
import { ClassroomSessionUpdateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session-update.input';
import { ClassroomSessionWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session-where-unique.input';
import { ClassroomSessionWhereInput } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassroomSessionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createClassroomSessionInput: ClassroomSessionCreateInput | any) {
    return this.prisma.classroomSession.create({
      data: createClassroomSessionInput,
    });
  }

  findAll(condition?: ClassroomSessionWhereInput) {
    return this.prisma.classroomSession.findMany({
      where: condition,
    });
  }

  findOne(id: ClassroomSessionWhereUniqueInput) {
    return this.prisma.classroomSession.findUnique({
      where: id,
    });
  }

  update(
    id: ClassroomSessionWhereUniqueInput,
    updateClassroomSessionInput: ClassroomSessionUpdateInput | any,
  ) {
    return this.prisma.classroomSession.update({
      where: id,
      data: updateClassroomSessionInput,
    });
  }

  remove(id: ClassroomSessionWhereUniqueInput) {
    return this.prisma.classroomSession.delete({
      where: id,
    });
  }
}
