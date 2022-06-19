import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ModuleCreateInput } from 'src/@generated/prisma-nestjs-graphql/module/module-create.input';
import { ModuleUpdateInput } from 'src/@generated/prisma-nestjs-graphql/module/module-update.input';
import { ModuleWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/module/module-where-unique.input';
import { ModuleWhereInput } from 'src/@generated/prisma-nestjs-graphql/module/module-where.input';
import { Module } from 'src/@generated/prisma-nestjs-graphql/module/module.model';
import { ModuleService } from './module.service';

@Resolver(() => Module)
export class ModuleResolver {
  constructor(private readonly moduleService: ModuleService) {}

  @Mutation(() => Module)
  createModule(
    @Args('createModuleInput') createModuleInput: ModuleCreateInput,
  ) {
    return this.moduleService.create(createModuleInput);
  }

  @Query(() => [Module], { name: 'modules' })
  findAll(@Args('condition', { nullable: true }) condition?: ModuleWhereInput) {
    return this.moduleService.findAll(condition);
  }

  @Query(() => Module, { name: 'module' })
  findOne(@Args('id') id: ModuleWhereUniqueInput) {
    return this.moduleService.findOne(id);
  }

  @Mutation(() => Module)
  updateModule(
    @Args('updateModuleInput') updateModuleInput: ModuleUpdateInput,
    @Args('id') id: ModuleWhereUniqueInput,
  ) {
    return this.moduleService.update(id, updateModuleInput);
  }

  @Mutation(() => Module)
  removeModule(@Args('id') id: ModuleWhereUniqueInput) {
    return this.moduleService.remove(id);
  }
}
