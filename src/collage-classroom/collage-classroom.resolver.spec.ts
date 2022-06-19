import { Test, TestingModule } from '@nestjs/testing';
import { CollageClassroomResolver } from './collage-classroom.resolver';
import { CollageClassroomService } from './collage-classroom.service';

describe('CollageClassroomResolver', () => {
  let resolver: CollageClassroomResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollageClassroomResolver, CollageClassroomService],
    }).compile();

    resolver = module.get<CollageClassroomResolver>(CollageClassroomResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
