import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClassroomQuizCreateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz-create.input';
import { ClassroomQuizUpdateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz-update.input';
import { ClassroomQuizWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz-where-unique.input';
import { ClassroomQuizWhereInput } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz-where.input';
import { ClassroomQuiz } from 'src/@generated/prisma-nestjs-graphql/classroom-quiz/classroom-quiz.model';
import { ClassroomQuizService } from './classroom-quiz.service';

@Resolver(() => ClassroomQuiz)
export class ClassroomQuizResolver {
  constructor(private readonly classroomQuizService: ClassroomQuizService) {}

  @Mutation(() => ClassroomQuiz)
  createClassroomQuiz(
    @Args('createClassroomQuizInput')
    createClassroomQuizInput: ClassroomQuizCreateInput,
  ) {
    return this.classroomQuizService.create(createClassroomQuizInput);
  }

  @Query(() => [ClassroomQuiz], { name: 'classroomQuizs' })
  findAll(
    @Args('condition', { nullable: true }) condition?: ClassroomQuizWhereInput,
  ) {
    return this.classroomQuizService.findAll(condition);
  }

  @Query(() => ClassroomQuiz, { name: 'classroomQuiz' })
  findOne(@Args('id') id: ClassroomQuizWhereUniqueInput) {
    return this.classroomQuizService.findOne(id);
  }

  @Mutation(() => ClassroomQuiz)
  updateClassroomQuiz(
    @Args('id') id: ClassroomQuizWhereUniqueInput,
    @Args('updateClassroomQuizInput')
    updateClassroomQuizInput: ClassroomQuizUpdateInput,
  ) {
    return this.classroomQuizService.update(id, updateClassroomQuizInput);
  }

  @Mutation(() => ClassroomQuiz)
  removeClassroomQuiz(@Args('id') id: ClassroomQuizWhereUniqueInput) {
    return this.classroomQuizService.remove(id);
  }
}
