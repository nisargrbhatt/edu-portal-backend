import { Injectable } from '@nestjs/common';
import { ClassroomQuizCreateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz-create.input';
import { ClassroomQuizUpdateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz-update.input';
import { ClassroomQuizWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz-where-unique.input';
import { ClassroomQuizWhereInput } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassroomQuizService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClassroomQuizInput: ClassroomQuizCreateInput | any) {
    return this.prisma.classroomQuiz.create({
      data: createClassroomQuizInput,
    });
  }

  findAll(condition?: ClassroomQuizWhereInput) {
    return this.prisma.classroomQuiz.findMany({
      where: condition,
    });
  }

  findOne(id: ClassroomQuizWhereUniqueInput) {
    return this.prisma.classroomQuiz.findUnique({
      where: id,
    });
  }

  update(
    id: ClassroomQuizWhereUniqueInput,
    updateClassroomQuizInput: ClassroomQuizUpdateInput | any,
  ) {
    return this.prisma.classroomQuiz.update({
      where: id,
      data: updateClassroomQuizInput,
    });
  }

  remove(id: ClassroomQuizWhereUniqueInput) {
    return this.prisma.classroomQuiz.delete({
      where: id,
    });
  }
}
