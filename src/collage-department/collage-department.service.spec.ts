import { Test, TestingModule } from '@nestjs/testing';
import { CollageDepartmentService } from './collage-department.service';

describe('CollageDepartmentService', () => {
  let service: CollageDepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollageDepartmentService],
    }).compile();

    service = module.get<CollageDepartmentService>(CollageDepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
