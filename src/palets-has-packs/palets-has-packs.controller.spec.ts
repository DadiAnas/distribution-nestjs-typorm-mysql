import { Test, TestingModule } from '@nestjs/testing';
import { PaletsHasPacksController } from './palets-has-packs.controller';

describe('PaletsHasPacksController', () => {
  let controller: PaletsHasPacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaletsHasPacksController],
    }).compile();

    controller = module.get<PaletsHasPacksController>(PaletsHasPacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
