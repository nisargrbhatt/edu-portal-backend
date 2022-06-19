import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CityCreateInput } from 'src/@generated/prisma-nestjs-graphql/city/city-create.input';
import { CityUpdateInput } from 'src/@generated/prisma-nestjs-graphql/city/city-update.input';
import { CityWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/city/city-where-unique.input';
import { CityWhereInput } from 'src/@generated/prisma-nestjs-graphql/city/city-where.input';
import { City } from 'src/@generated/prisma-nestjs-graphql/city/city.model';
import { CityService } from './city.service';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Mutation(() => City)
  createCity(@Args('createCityInput') createCityInput: CityCreateInput) {
    return this.cityService.create(createCityInput);
  }

  @Query(() => [City], { name: 'cities' })
  findAll(@Args('condition', { nullable: true }) condition?: CityWhereInput) {
    return this.cityService.findAll(condition);
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id') id: CityWhereUniqueInput) {
    return this.cityService.findOne(id);
  }

  @Mutation(() => City)
  updateCity(
    @Args('id') id: CityWhereUniqueInput,
    @Args('updateCityInput') updateCityInput: CityUpdateInput,
  ) {
    return this.cityService.update(id, updateCityInput);
  }

  @Mutation(() => City)
  removeCity(@Args('id') id: CityWhereUniqueInput) {
    return this.cityService.remove(id);
  }
}
