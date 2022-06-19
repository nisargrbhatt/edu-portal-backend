import { Module } from '@nestjs/common';
import { CollageClassroomService } from './collage-classroom.service';
import { CollageClassroomResolver } from './collage-classroom.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CollageClassroomResolver, CollageClassroomService, PrismaService],
})
export class CollageClassroomModule {}
