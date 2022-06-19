import { Module } from '@nestjs/common';
import { ClassroomAttendanceService } from './classroom-attendance.service';
import { ClassroomAttendanceResolver } from './classroom-attendance.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    ClassroomAttendanceResolver,
    ClassroomAttendanceService,
    PrismaService,
  ],
})
export class ClassroomAttendanceModule {}
