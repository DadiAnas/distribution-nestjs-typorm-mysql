import { Test, TestingModule } from '@nestjs/testing';
import { DistributeursController } from './distributeurs.controller';

describe('DistributeursController', () => {
  let controller: DistributeursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributeursController],
    }).compile();

    controller = module.get<DistributeursController>(DistributeursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
