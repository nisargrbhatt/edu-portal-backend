import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminTypeCreateInput } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type-create.input';
import { AdminTypeUpdateInput } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type-update.input';
import { AdminTypeWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type-where-unique.input';
import { AdminTypeWhereInput } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type-where.input';
import { AdminType } from 'src/@generated/prisma-nestjs-graphql/admin-type/admin-type.model';
import { AdminTypeService } from './admin-type.service';

@Resolver(() => AdminType)
export class AdminTypeResolver {
  constructor(private readonly adminTypeService: AdminTypeService) {}

  @Mutation(() => AdminType)
  createAdminType(
    @Args('createAdminTypeInput') createAdminTypeInput: AdminTypeCreateInput,
  ) {
    return this.adminTypeService.create(createAdminTypeInput);
  }

  @Query(() => [AdminType], { name: 'adminTypes' })
  findAll(
    @Args('condition', { nullable: true }) condition?: AdminTypeWhereInput,
  ) {
    return this.adminTypeService.findAll(condition);
  }

  @Query(() => AdminType, { name: 'adminType' })
  findOne(@Args('id') id: AdminTypeWhereUniqueInput) {
    return this.adminTypeService.findOne(id);
  }

  @Mutation(() => AdminType)
  updateAdminType(
    @Args('updateAdminTypeInput') updateAdminTypeInput: AdminTypeUpdateInput,
    @Args('id') id: AdminTypeWhereUniqueInput,
  ) {
    return this.adminTypeService.update(id, updateAdminTypeInput);
  }

  @Mutation(() => AdminType)
  removeAdminType(@Args('id') id: AdminTypeWhereUniqueInput) {
    return this.adminTypeService.remove(id);
  }
}
