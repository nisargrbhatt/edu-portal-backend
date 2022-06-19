import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentCreateInput } from 'src/@generated/prisma-nestjs-graphql/student/student-create.input';
import { Student } from 'src/@generated/prisma-nestjs-graphql/student/student.model';
import { StudentWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/student/student-where-unique.input';
import { StudentUpdateInput } from 'src/@generated/prisma-nestjs-graphql/student/student-update.input';
import { StudentWhereInput } from 'src/@generated/prisma-nestjs-graphql/student/student-where.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => Student)
  createStudent(
    @Args('createStudentInput') createStudentInput: StudentCreateInput,
  ) {
    return this.studentService.create(createStudentInput);
  }

  @Query(() => [Student], { name: 'students' })
  findAll(
    @Args('condition', { nullable: true }) condition?: StudentWhereInput,
  ) {
    return this.studentService.findAll(condition);
  }

  @Query(() => Student, { name: 'student' })
  findOne(@Args('id') id: StudentWhereUniqueInput) {
    return this.studentService.findOne(id);
  }

  @Mutation(() => Student)
  updateStudent(
    @Args('id') id: StudentWhereUniqueInput,
    @Args('updateStudentInput') updateStudentInput: StudentUpdateInput,
  ) {
    return this.studentService.update(id, updateStudentInput);
  }

  @Mutation(() => Student)
  removeStudent(@Args('id') id: StudentWhereUniqueInput) {
    return this.studentService.remove(id);
  }
}
