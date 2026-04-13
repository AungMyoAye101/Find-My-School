import { Test, TestingModule } from '@nestjs/testing';
import { ApplicatonsService } from './applicatons.service';

describe('ApplicatonsService', () => {
  let service: ApplicatonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicatonsService],
    }).compile();

    service = module.get<ApplicatonsService>(ApplicatonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
