import { Test, TestingModule } from '@nestjs/testing';
import { AdminTypeService } from './admin-type.service';

describe('AdminTypeService', () => {
  let service: AdminTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminTypeService],
    }).compile();

    service = module.get<AdminTypeService>(AdminTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
