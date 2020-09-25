import { Test, TestingModule } from '@nestjs/testing';
import { DistributeurHasProductController } from './distributeur-has-product.controller';

describe('DistributeurHasProductController', () => {
  let controller: DistributeurHasProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributeurHasProductController],
    }).compile();

    controller = module.get<DistributeurHasProductController>(DistributeurHasProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
