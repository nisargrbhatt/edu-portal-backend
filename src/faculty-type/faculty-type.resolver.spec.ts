import { Test, TestingModule } from '@nestjs/testing';
import { FacultyTypeResolver } from './faculty-type.resolver';
import { FacultyTypeService } from './faculty-type.service';

describe('FacultyTypeResolver', () => {
  let resolver: FacultyTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultyTypeResolver, FacultyTypeService],
    }).compile();

    resolver = module.get<FacultyTypeResolver>(FacultyTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
