import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomAttendanceService } from './classroom-attendance.service';

describe('ClassroomAttendanceService', () => {
  let service: ClassroomAttendanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomAttendanceService],
    }).compile();

    service = module.get<ClassroomAttendanceService>(ClassroomAttendanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
