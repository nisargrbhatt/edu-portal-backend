import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomAttendanceResolver } from './classroom-attendance.resolver';
import { ClassroomAttendanceService } from './classroom-attendance.service';

describe('ClassroomAttendanceResolver', () => {
  let resolver: ClassroomAttendanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomAttendanceResolver, ClassroomAttendanceService],
    }).compile();

    resolver = module.get<ClassroomAttendanceResolver>(ClassroomAttendanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
