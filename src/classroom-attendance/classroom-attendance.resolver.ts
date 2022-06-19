import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClassroomAttendanceCreateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance-create.input';
import { ClassroomAttendanceUpdateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance-update.input';
import { ClassroomAttendanceWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance-where-unique.input';
import { ClassroomAttendanceWhereInput } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance-where.input';
import { ClassroomAttendance } from 'src/@generated/prisma-nestjs-graphql/classroom-attendance/classroom-attendance.model';
import { ClassroomAttendanceService } from './classroom-attendance.service';

@Resolver(() => ClassroomAttendance)
export class ClassroomAttendanceResolver {
  constructor(
    private readonly classroomAttendanceService: ClassroomAttendanceService,
  ) {}

  @Mutation(() => ClassroomAttendance)
  createClassroomAttendance(
    @Args('createClassroomAttendanceInput')
    createClassroomAttendanceInput: ClassroomAttendanceCreateInput,
  ) {
    return this.classroomAttendanceService.create(
      createClassroomAttendanceInput,
    );
  }

  @Query(() => [ClassroomAttendance], { name: 'classroomAttendances' })
  findAll(
    @Args('condition', { nullable: true })
    condition?: ClassroomAttendanceWhereInput,
  ) {
    return this.classroomAttendanceService.findAll(condition);
  }

  @Query(() => ClassroomAttendance, { name: 'classroomAttendance' })
  findOne(@Args('id') id: ClassroomAttendanceWhereUniqueInput) {
    return this.classroomAttendanceService.findOne(id);
  }

  @Mutation(() => ClassroomAttendance)
  updateClassroomAttendance(
    @Args('id') id: ClassroomAttendanceWhereUniqueInput,
    @Args('updateClassroomAttendanceInput')
    updateClassroomAttendanceInput: ClassroomAttendanceUpdateInput,
  ) {
    return this.classroomAttendanceService.update(
      id,
      updateClassroomAttendanceInput,
    );
  }

  @Mutation(() => ClassroomAttendance)
  removeClassroomAttendance(
    @Args('id') id: ClassroomAttendanceWhereUniqueInput,
  ) {
    return this.classroomAttendanceService.remove(id);
  }
}
