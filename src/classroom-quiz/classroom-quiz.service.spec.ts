import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomQuizService } from './classroom-quiz.service';

describe('ClassroomQuizService', () => {
  let service: ClassroomQuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomQuizService],
    }).compile();

    service = module.get<ClassroomQuizService>(ClassroomQuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
