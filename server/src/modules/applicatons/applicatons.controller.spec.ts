import { Test, TestingModule } from '@nestjs/testing';
import { ApplicatonsController } from './applicatons.controller';
import { ApplicatonsService } from './applicatons.service';

describe('ApplicatonsController', () => {
  let controller: ApplicatonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicatonsController],
      providers: [ApplicatonsService],
    }).compile();

    controller = module.get<ApplicatonsController>(ApplicatonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
