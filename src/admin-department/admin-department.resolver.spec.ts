import { Test, TestingModule } from '@nestjs/testing';
import { AdminDepartmentResolver } from './admin-department.resolver';
import { AdminDepartmentService } from './admin-department.service';

describe('AdminDepartmentResolver', () => {
  let resolver: AdminDepartmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminDepartmentResolver, AdminDepartmentService],
    }).compile();

    resolver = module.get<AdminDepartmentResolver>(AdminDepartmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
