import { Injectable } from '@nestjs/common';
import { StateCreateInput } from 'src/@generated/prisma-nestjs-graphql/state/state-create.input';
import { StateUpdateInput } from 'src/@generated/prisma-nestjs-graphql/state/state-update.input';
import { StateWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/state/state-where-unique.input';
import { StateWhereInput } from 'src/@generated/prisma-nestjs-graphql/state/state-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StateService {
  constructor(private readonly prisma: PrismaService) {}
  create(createStateInput: StateCreateInput | any) {
    return this.prisma.state.create({
      data: createStateInput,
    });
  }

  findAll(condition?: StateWhereInput) {
    return this.prisma.state.findMany({
      where: condition,
    });
  }

  findOne(id: StateWhereUniqueInput) {
    return this.prisma.state.findUnique({
      where: id,
    });
  }

  update(id: StateWhereUniqueInput, updateStateInput: StateUpdateInput | any) {
    return this.prisma.state.update({
      data: updateStateInput,
      where: id,
    });
  }

  remove(id: StateWhereUniqueInput) {
    return this.prisma.state.delete({
      where: id,
    });
  }
}
