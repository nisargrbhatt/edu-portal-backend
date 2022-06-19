import { Injectable } from '@nestjs/common';
import { CityCreateInput } from 'src/@generated/prisma-nestjs-graphql/city/city-create.input';
import { CityUpdateInput } from 'src/@generated/prisma-nestjs-graphql/city/city-update.input';
import { CityWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/city/city-where-unique.input';
import { CityWhereInput } from 'src/@generated/prisma-nestjs-graphql/city/city-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCityInput: CityCreateInput | any) {
    return this.prisma.city.create({
      data: createCityInput,
    });
  }

  findAll(condition?: CityWhereInput) {
    return this.prisma.city.findMany({
      where: condition,
    });
  }

  findOne(id: CityWhereUniqueInput) {
    return this.prisma.city.findUnique({
      where: id,
    });
  }

  update(id: CityWhereUniqueInput, updateCityInput: CityUpdateInput | any) {
    return this.prisma.city.update({
      where: id,
      data: updateCityInput,
    });
  }

  remove(id: CityWhereUniqueInput) {
    return this.prisma.city.delete({
      where: id,
    });
  }
}
