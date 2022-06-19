import { Test, TestingModule } from '@nestjs/testing';
import { CollageDepartmentResolver } from './collage-department.resolver';
import { CollageDepartmentService } from './collage-department.service';

describe('CollageDepartmentResolver', () => {
  let resolver: CollageDepartmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollageDepartmentResolver, CollageDepartmentService],
    }).compile();

    resolver = module.get<CollageDepartmentResolver>(CollageDepartmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
