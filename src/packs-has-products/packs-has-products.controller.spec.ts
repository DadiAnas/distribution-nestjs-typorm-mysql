import { Test, TestingModule } from '@nestjs/testing';
import { PacksHasProductsController } from './packs-has-products.controller';

describe('PacksHasProductsController', () => {
  let controller: PacksHasProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacksHasProductsController],
    }).compile();

    controller = module.get<PacksHasProductsController>(PacksHasProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
