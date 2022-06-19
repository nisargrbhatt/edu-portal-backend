import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StateCreateInput } from 'src/@generated/prisma-nestjs-graphql/state/state-create.input';
import { StateUpdateInput } from 'src/@generated/prisma-nestjs-graphql/state/state-update.input';
import { StateWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/state/state-where-unique.input';
import { StateWhereInput } from 'src/@generated/prisma-nestjs-graphql/state/state-where.input';
import { State } from 'src/@generated/prisma-nestjs-graphql/state/state.model';
import { StateService } from './state.service';

@Resolver(() => State)
export class StateResolver {
  constructor(private readonly stateService: StateService) {}

  @Mutation(() => State)
  createState(@Args('createStateInput') createStateInput: StateCreateInput) {
    return this.stateService.create(createStateInput);
  }

  @Query(() => [State], { name: 'states' })
  findAll(@Args('condition', { nullable: true }) condition?: StateWhereInput) {
    return this.stateService.findAll(condition);
  }

  @Query(() => State, { name: 'state' })
  findOne(@Args('id') id: StateWhereUniqueInput) {
    return this.stateService.findOne(id);
  }

  @Mutation(() => State)
  updateState(
    @Args('id') id: StateWhereUniqueInput,
    @Args('updateStateInput') updateStateInput: StateUpdateInput,
  ) {
    return this.stateService.update(id, updateStateInput);
  }

  @Mutation(() => State)
  removeState(@Args('id') id: StateWhereUniqueInput) {
    return this.stateService.remove(id);
  }
}
