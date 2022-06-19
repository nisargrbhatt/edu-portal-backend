import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomQuizResolver } from './classroom-quiz.resolver';
import { ClassroomQuizService } from './classroom-quiz.service';

describe('ClassroomQuizResolver', () => {
  let resolver: ClassroomQuizResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomQuizResolver, ClassroomQuizService],
    }).compile();

    resolver = module.get<ClassroomQuizResolver>(ClassroomQuizResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
