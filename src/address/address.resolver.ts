import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AddressCreateInput } from 'src/@generated/prisma-nestjs-graphql/address/address-create.input';
import { AddressUpdateInput } from 'src/@generated/prisma-nestjs-graphql/address/address-update.input';
import { AddressWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/address/address-where-unique.input';
import { AddressWhereInput } from 'src/@generated/prisma-nestjs-graphql/address/address-where.input';
import { Address } from 'src/@generated/prisma-nestjs-graphql/address/address.model';
import { AddressService } from './address.service';

@Resolver(() => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  createAddress(
    @Args('createAddressInput') createAddressInput: AddressCreateInput,
  ) {
    return this.addressService.create(createAddressInput);
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll(
    @Args('condition', { nullable: true }) condition?: AddressWhereInput,
  ) {
    return this.addressService.findAll(condition);
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args('id') id: AddressWhereUniqueInput) {
    return this.addressService.findOne(id);
  }

  @Mutation(() => Address)
  updateAddress(
    @Args('updateAddressInput') updateAddressInput: AddressUpdateInput,
    @Args('id') id: AddressWhereUniqueInput,
  ) {
    return this.addressService.update(id, updateAddressInput);
  }

  @Mutation(() => Address)
  removeAddress(@Args('id') id: AddressWhereUniqueInput) {
    return this.addressService.remove(id);
  }
}
