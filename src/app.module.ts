import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { FacultyModule } from './faculty/faculty.module';
import { AdminTypeModule } from './admin-type/admin-type.module';
import { AdminDepartmentModule } from './admin-department/admin-department.module';
import { FacultyTypeModule } from './faculty-type/faculty-type.module';
import { ModuleModule } from './module/module.module';
import { AddressModule } from './address/address.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { CollageDepartmentModule } from './collage-department/collage-department.module';
import { CollageClassroomModule } from './collage-classroom/collage-classroom.module';
import { ClassroomSessionModule } from './classroom-session/classroom-session.module';
import { ClassroomAttendanceModule } from './classroom-attendance/classroom-attendance.module';
import { ClassroomQuizModule } from './classroom-quiz/classroom-quiz.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AdminModule,
    StudentModule,
    FacultyModule,
    AdminTypeModule,
    AdminDepartmentModule,
    FacultyTypeModule,
    ModuleModule,
    AddressModule,
    CountryModule,
    StateModule,
    CityModule,
    CollageDepartmentModule,
    CollageClassroomModule,
    ClassroomSessionModule,
    ClassroomAttendanceModule,
    ClassroomQuizModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
