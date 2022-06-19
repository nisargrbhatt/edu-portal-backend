import { Injectable } from '@nestjs/common';
import { AddressCreateInput } from 'src/@generated/prisma-nestjs-graphql/address/address-create.input';
import { AddressUpdateInput } from 'src/@generated/prisma-nestjs-graphql/address/address-update.input';
import { AddressWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/address/address-where-unique.input';
import { AddressWhereInput } from 'src/@generated/prisma-nestjs-graphql/address/address-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAddressInput: AddressCreateInput | any) {
    return this.prisma.address.create({
      data: createAddressInput,
    });
  }

  findAll(condition?: AddressWhereInput) {
    return this.prisma.address.findMany({
      where: condition,
    });
  }

  findOne(id: AddressWhereUniqueInput) {
    return this.prisma.address.findUnique({
      where: id,
    });
  }

  update(
    id: AddressWhereUniqueInput,
    updateAddressInput: AddressUpdateInput | any,
  ) {
    return this.prisma.address.update({
      where: id,
      data: updateAddressInput,
    });
  }

  remove(id: AddressWhereUniqueInput) {
    return this.prisma.address.delete({
      where: id,
    });
  }
}
