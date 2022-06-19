import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminDepartmentCreateInput } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department-create.input';
import { AdminDepartmentUpdateInput } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department-update.input';
import { AdminDepartmentWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department-where-unique.input';
import { AdminDepartmentWhereInput } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department-where.input';
import { AdminDepartment } from 'src/@generated/prisma-nestjs-graphql/admin-department/admin-department.model';
import { AdminDepartmentService } from './admin-department.service';

@Resolver(() => AdminDepartment)
export class AdminDepartmentResolver {
  constructor(
    private readonly adminDepartmentService: AdminDepartmentService,
  ) {}

  @Mutation(() => AdminDepartment)
  createAdminDepartment(
    @Args('createAdminDepartmentInput')
    createAdminDepartmentInput: AdminDepartmentCreateInput,
  ) {
    return this.adminDepartmentService.create(createAdminDepartmentInput);
  }

  @Query(() => [AdminDepartment], { name: 'adminDepartments' })
  findAll(
    @Args('condition', { nullable: true })
    condition?: AdminDepartmentWhereInput,
  ) {
    return this.adminDepartmentService.findAll(condition);
  }

  @Query(() => AdminDepartment, { name: 'adminDepartment' })
  findOne(@Args('id') id: AdminDepartmentWhereUniqueInput) {
    return this.adminDepartmentService.findOne(id);
  }

  @Mutation(() => AdminDepartment)
  updateAdminDepartment(
    @Args('updateAdminDepartmentInput')
    updateAdminDepartmentInput: AdminDepartmentUpdateInput,
    @Args('id') id: AdminDepartmentWhereUniqueInput,
  ) {
    return this.adminDepartmentService.update(id, updateAdminDepartmentInput);
  }

  @Mutation(() => AdminDepartment)
  removeAdminDepartment(@Args('id') id: AdminDepartmentWhereUniqueInput) {
    return this.adminDepartmentService.remove(id);
  }
}
