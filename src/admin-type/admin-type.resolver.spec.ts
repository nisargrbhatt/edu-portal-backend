import { Test, TestingModule } from '@nestjs/testing';
import { AdminTypeResolver } from './admin-type.resolver';
import { AdminTypeService } from './admin-type.service';

describe('AdminTypeResolver', () => {
  let resolver: AdminTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminTypeResolver, AdminTypeService],
    }).compile();

    resolver = module.get<AdminTypeResolver>(AdminTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
