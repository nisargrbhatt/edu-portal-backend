import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminCreateInput } from 'src/@generated/prisma-nestjs-graphql/admin/admin-create.input';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';
import { AdminUpdateInput } from 'src/@generated/prisma-nestjs-graphql/admin/admin-update.input';
import { AdminWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/admin/admin-where-unique.input';
import { AdminWhereInput } from 'src/@generated/prisma-nestjs-graphql/admin/admin-where.input';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => Admin)
  createAdmin(@Args('createAdminInput') createAdminInput: AdminCreateInput) {
    return this.adminService.create(createAdminInput);
  }

  @Query(() => [Admin], { name: 'admins' })
  findAll(@Args('condition', { nullable: true }) condition?: AdminWhereInput) {
    return this.adminService.findAll(condition);
  }

  @Query(() => Admin, { name: 'admin' })
  findOne(@Args('id') id: AdminWhereUniqueInput) {
    return this.adminService.findOne(id);
  }

  @Mutation(() => Admin)
  updateAdmin(
    @Args('id') id: AdminWhereUniqueInput,
    @Args('updateAdminInput') updateAdminInput: AdminUpdateInput,
  ) {
    return this.adminService.update(id, updateAdminInput);
  }

  @Mutation(() => Admin)
  removeAdmin(@Args('id') id: AdminWhereUniqueInput) {
    return this.adminService.remove(id);
  }
}
