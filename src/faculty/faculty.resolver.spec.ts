import { Test, TestingModule } from '@nestjs/testing';
import { FacultyResolver } from './faculty.resolver';
import { FacultyService } from './faculty.service';

describe('FacultyResolver', () => {
  let resolver: FacultyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultyResolver, FacultyService],
    }).compile();

    resolver = module.get<FacultyResolver>(FacultyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
