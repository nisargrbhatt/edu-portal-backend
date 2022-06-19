import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CollageClassroomCreateInput } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom-create.input';
import { CollageClassroomUpdateInput } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom-update.input';
import { CollageClassroomWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom-where-unique.input';
import { CollageClassroomWhereInput } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom-where.input';
import { CollageClassroom } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom.model';
import { CollageClassroomService } from './collage-classroom.service';

@Resolver(() => CollageClassroom)
export class CollageClassroomResolver {
  constructor(
    private readonly collageClassroomService: CollageClassroomService,
  ) {}

  @Mutation(() => CollageClassroom)
  createCollageClassroom(
    @Args('createCollageClassroomInput')
    createCollageClassroomInput: CollageClassroomCreateInput,
  ) {
    return this.collageClassroomService.create(createCollageClassroomInput);
  }

  @Query(() => [CollageClassroom], { name: 'collageClassrooms' })
  findAll(
    @Args('condition', { nullable: true })
    condition?: CollageClassroomWhereInput,
  ) {
    return this.collageClassroomService.findAll(condition);
  }

  @Query(() => CollageClassroom, { name: 'collageClassroom' })
  findOne(@Args('id') id: CollageClassroomWhereUniqueInput) {
    return this.collageClassroomService.findOne(id);
  }

  @Mutation(() => CollageClassroom)
  updateCollageClassroom(
    @Args('id') id: CollageClassroomWhereUniqueInput,
    @Args('updateCollageClassroomInput')
    updateCollageClassroomInput: CollageClassroomUpdateInput,
  ) {
    return this.collageClassroomService.update(id, updateCollageClassroomInput);
  }

  @Mutation(() => CollageClassroom)
  removeCollageClassroom(@Args('id') id: CollageClassroomWhereUniqueInput) {
    return this.collageClassroomService.remove(id);
  }
}
