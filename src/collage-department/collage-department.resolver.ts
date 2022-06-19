import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CollageDepartmentCreateInput } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department-create.input';
import { CollageDepartmentUpdateInput } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department-update.input';
import { CollageDepartmentWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department-where-unique.input';
import { CollageDepartmentWhereInput } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department-where.input';
import { CollageDepartment } from 'src/@generated/prisma-nestjs-graphql/collage-department/collage-department.model';
import { CollageDepartmentService } from './collage-department.service';

@Resolver(() => CollageDepartment)
export class CollageDepartmentResolver {
  constructor(
    private readonly collageDepartmentService: CollageDepartmentService,
  ) {}

  @Mutation(() => CollageDepartment)
  createCollageDepartment(
    @Args('createCollageDepartmentInput')
    createCollageDepartmentInput: CollageDepartmentCreateInput,
  ) {
    return this.collageDepartmentService.create(createCollageDepartmentInput);
  }

  @Query(() => [CollageDepartment], { name: 'collageDepartments' })
  findAll(
    @Args('condition', { nullable: true })
    condition?: CollageDepartmentWhereInput,
  ) {
    return this.collageDepartmentService.findAll(condition);
  }

  @Query(() => CollageDepartment, { name: 'collageDepartment' })
  findOne(@Args('id') id: CollageDepartmentWhereUniqueInput) {
    return this.collageDepartmentService.findOne(id);
  }

  @Mutation(() => CollageDepartment)
  updateCollageDepartment(
    @Args('id') id: CollageDepartmentWhereUniqueInput,
    @Args('updateCollageDepartmentInput')
    updateCollageDepartmentInput: CollageDepartmentUpdateInput,
  ) {
    return this.collageDepartmentService.update(
      id,
      updateCollageDepartmentInput,
    );
  }

  @Mutation(() => CollageDepartment)
  removeCollageDepartment(@Args('id') id: CollageDepartmentWhereUniqueInput) {
    return this.collageDepartmentService.remove(id);
  }
}
