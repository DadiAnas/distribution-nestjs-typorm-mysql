import { Test, TestingModule } from '@nestjs/testing';
import { PaletsController } from './palets.controller';

describe('PaletsController', () => {
  let controller: PaletsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaletsController],
    }).compile();

    controller = module.get<PaletsController>(PaletsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
