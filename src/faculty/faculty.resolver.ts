import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FacultyCreateInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-create.input';
import { FacultyUpdateInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-update.input';
import { FacultyWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-where-unique.input';
import { FacultyWhereInput } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty-where.input';
import { Faculty } from 'src/@generated/prisma-nestjs-graphql/faculty/faculty.model';
import { FacultyService } from './faculty.service';

@Resolver(() => Faculty)
export class FacultyResolver {
  constructor(private readonly facultyService: FacultyService) {}

  @Mutation(() => Faculty)
  createFaculty(
    @Args('createFacultyInput') createFacultyInput: FacultyCreateInput,
  ) {
    return this.facultyService.create(createFacultyInput);
  }

  @Query(() => [Faculty], { name: 'facultys' })
  findAll(
    @Args('condition', { nullable: true }) condition?: FacultyWhereInput,
  ) {
    return this.facultyService.findAll(condition);
  }

  @Query(() => Faculty, { name: 'faculty' })
  findOne(@Args('id') id: FacultyWhereUniqueInput) {
    return this.facultyService.findOne(id);
  }

  @Mutation(() => Faculty)
  updateFaculty(
    @Args('id') id: FacultyWhereUniqueInput,
    @Args('updateFacultyInput') updateFacultyInput: FacultyUpdateInput,
  ) {
    return this.facultyService.update(id, updateFacultyInput);
  }

  @Mutation(() => Faculty)
  removeFaculty(@Args('id') id: FacultyWhereUniqueInput) {
    return this.facultyService.remove(id);
  }
}
