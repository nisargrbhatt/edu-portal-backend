import { Test, TestingModule } from '@nestjs/testing';
import { AdminDepartmentService } from './admin-department.service';

describe('AdminDepartmentService', () => {
  let service: AdminDepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminDepartmentService],
    }).compile();

    service = module.get<AdminDepartmentService>(AdminDepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
