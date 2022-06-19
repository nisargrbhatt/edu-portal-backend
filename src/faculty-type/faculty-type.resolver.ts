import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FacultyTypeCreateInput } from 'src/@generated/prisma-nestjs-graphql/faculty-type/faculty-type-create.input';
import { FacultyTypeUpdateInput } from 'src/@generated/prisma-nestjs-graphql/faculty-type/faculty-type-update.input';
import { FacultyTypeWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/faculty-type/faculty-type-where-unique.input';
import { FacultyTypeWhereInput } from 'src/@generated/prisma-nestjs-graphql/faculty-type/faculty-type-where.input';
import { FacultyType } from 'src/@generated/prisma-nestjs-graphql/faculty-type/faculty-type.model';
import { FacultyTypeService } from './faculty-type.service';

@Resolver(() => FacultyType)
export class FacultyTypeResolver {
  constructor(private readonly facultyTypeService: FacultyTypeService) {}

  @Mutation(() => FacultyType)
  createFacultyType(
    @Args('createFacultyTypeInput')
    createFacultyTypeInput: FacultyTypeCreateInput,
  ) {
    return this.facultyTypeService.create(createFacultyTypeInput);
  }

  @Query(() => [FacultyType], { name: 'facultyTypes' })
  findAll(
    @Args('condition', { nullable: true }) condition?: FacultyTypeWhereInput,
  ) {
    return this.facultyTypeService.findAll(condition);
  }

  @Query(() => FacultyType, { name: 'facultyType' })
  findOne(@Args('id') id: FacultyTypeWhereUniqueInput) {
    return this.facultyTypeService.findOne(id);
  }

  @Mutation(() => FacultyType)
  updateFacultyType(
    @Args('updateFacultyTypeInput')
    updateFacultyTypeInput: FacultyTypeUpdateInput,
    @Args('id') id: FacultyTypeWhereUniqueInput,
  ) {
    return this.facultyTypeService.update(id, updateFacultyTypeInput);
  }

  @Mutation(() => FacultyType)
  removeFacultyType(@Args('id') id: FacultyTypeWhereUniqueInput) {
    return this.facultyTypeService.remove(id);
  }
}
