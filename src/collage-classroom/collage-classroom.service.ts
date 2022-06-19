import { Injectable } from '@nestjs/common';
import { CollageClassroomCreateInput } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom-create.input';
import { CollageClassroomUpdateInput } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom-update.input';
import { CollageClassroomWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom-where-unique.input';
import { CollageClassroomWhereInput } from 'src/@generated/prisma-nestjs-graphql/collage-classroom/collage-classroom-where.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollageClassroomService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCollageClassroomInput: CollageClassroomCreateInput | any) {
    return this.prisma.collageClassroom.create({
      data: createCollageClassroomInput,
    });
  }

  findAll(condition?: CollageClassroomWhereInput) {
    return this.prisma.collageClassroom.findMany({
      where: condition,
    });
  }

  findOne(id: CollageClassroomWhereUniqueInput) {
    return this.prisma.collageClassroom.findUnique({
      where: id,
    });
  }

  update(
    id: CollageClassroomWhereUniqueInput,
    updateCollageClassroomInput: CollageClassroomUpdateInput | any,
  ) {
    return this.prisma.collageClassroom.update({
      data: updateCollageClassroomInput,
      where: id,
    });
  }

  remove(id: CollageClassroomWhereUniqueInput) {
    return this.prisma.collageClassroom.delete({
      where: id,
    });
  }
}
