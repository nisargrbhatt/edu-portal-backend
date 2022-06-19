import { Injectable } from '@nestjs/common';
import { CountryCreateInput } from 'src/@generated/prisma-nestjs-graphql/country/country-create.input';
import { CountryUpdateInput } from 'src/@generated/prisma-nestjs-graphql/country/country-update.input';
import { CountryWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/country/country-where-unique.input';
import { CountryWhereInput } from 'src/@generated/prisma-nestjs-graphql/country/country-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCountryInput: CountryCreateInput | any) {
    return this.prisma.country.create({
      data: createCountryInput,
    });
  }

  findAll(condition: CountryWhereInput) {
    return this.prisma.country.findMany({
      where: condition,
    });
  }

  findOne(id: CountryWhereUniqueInput) {
    return this.prisma.country.findUnique({ where: id });
  }

  update(
    id: CountryWhereUniqueInput,
    updateCountryInput: CountryUpdateInput | any,
  ) {
    return this.prisma.country.update({
      data: updateCountryInput,
      where: id,
    });
  }

  remove(id: CountryWhereUniqueInput) {
    return this.prisma.country.delete({
      where: id,
    });
  }
}
