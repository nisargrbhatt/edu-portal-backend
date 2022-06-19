import { Test, TestingModule } from '@nestjs/testing';
import { CollageClassroomService } from './collage-classroom.service';

describe('CollageClassroomService', () => {
  let service: CollageClassroomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollageClassroomService],
    }).compile();

    service = module.get<CollageClassroomService>(CollageClassroomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
