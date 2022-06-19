import { Test, TestingModule } from '@nestjs/testing';
import { FacultyTypeService } from './faculty-type.service';

describe('FacultyTypeService', () => {
  let service: FacultyTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultyTypeService],
    }).compile();

    service = module.get<FacultyTypeService>(FacultyTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
