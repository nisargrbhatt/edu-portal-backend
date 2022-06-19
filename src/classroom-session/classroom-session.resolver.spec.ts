import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomSessionResolver } from './classroom-session.resolver';
import { ClassroomSessionService } from './classroom-session.service';

describe('ClassroomSessionResolver', () => {
  let resolver: ClassroomSessionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomSessionResolver, ClassroomSessionService],
    }).compile();

    resolver = module.get<ClassroomSessionResolver>(ClassroomSessionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
