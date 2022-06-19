import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CountryCreateInput } from 'src/@generated/prisma-nestjs-graphql/country/country-create.input';
import { CountryUpdateInput } from 'src/@generated/prisma-nestjs-graphql/country/country-update.input';
import { CountryWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/country/country-where-unique.input';
import { CountryWhereInput } from 'src/@generated/prisma-nestjs-graphql/country/country-where.input';
import { Country } from 'src/@generated/prisma-nestjs-graphql/country/country.model';
import { CountryService } from './country.service';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(() => Country)
  createCountry(
    @Args('createCountryInput') createCountryInput: CountryCreateInput,
  ) {
    return this.countryService.create(createCountryInput);
  }

  @Query(() => [Country], { name: 'countrys' })
  findAll(
    @Args('condition', { nullable: true }) condition?: CountryWhereInput,
  ) {
    return this.countryService.findAll(condition);
  }

  @Query(() => Country, { name: 'country' })
  findOne(@Args('id') id: CountryWhereUniqueInput) {
    return this.countryService.findOne(id);
  }

  @Mutation(() => Country)
  updateCountry(
    @Args('updateCountryInput') updateCountryInput: CountryUpdateInput,
    @Args('id') id: CountryWhereUniqueInput,
  ) {
    return this.countryService.update(id, updateCountryInput);
  }

  @Mutation(() => Country)
  removeCountry(@Args('id') id: CountryWhereUniqueInput) {
    return this.countryService.remove(id);
  }
}
