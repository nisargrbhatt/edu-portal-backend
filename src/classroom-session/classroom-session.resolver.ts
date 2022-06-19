import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClassroomSessionCreateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session-create.input';
import { ClassroomSessionUpdateInput } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session-update.input';
import { ClassroomSessionWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session-where-unique.input';
import { ClassroomSessionWhereInput } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session-where.input';
import { ClassroomSession } from 'src/@generated/prisma-nestjs-graphql/classroom-session/classroom-session.model';
import { ClassroomSessionService } from './classroom-session.service';

@Resolver(() => ClassroomSession)
export class ClassroomSessionResolver {
  constructor(
    private readonly classroomSessionService: ClassroomSessionService,
  ) {}

  @Mutation(() => ClassroomSession)
  createClassroomSession(
    @Args('createClassroomSessionInput')
    createClassroomSessionInput: ClassroomSessionCreateInput,
  ) {
    return this.classroomSessionService.create(createClassroomSessionInput);
  }

  @Query(() => [ClassroomSession], { name: 'classroomSessions' })
  findAll(
    @Args('condition', { nullable: true })
    condition?: ClassroomSessionWhereInput,
  ) {
    return this.classroomSessionService.findAll(condition);
  }

  @Query(() => ClassroomSession, { name: 'classroomSession' })
  findOne(@Args('id') id: ClassroomSessionWhereUniqueInput) {
    return this.classroomSessionService.findOne(id);
  }

  @Mutation(() => ClassroomSession)
  updateClassroomSession(
    @Args('id') id: ClassroomSessionWhereUniqueInput,
    @Args('updateClassroomSessionInput')
    updateClassroomSessionInput: ClassroomSessionUpdateInput,
  ) {
    return this.classroomSessionService.update(id, updateClassroomSessionInput);
  }

  @Mutation(() => ClassroomSession)
  removeClassroomSession(@Args('id') id: ClassroomSessionWhereUniqueInput) {
    return this.classroomSessionService.remove(id);
  }
}
