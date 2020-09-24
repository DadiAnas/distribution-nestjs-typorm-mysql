import { Test, TestingModule } from '@nestjs/testing';
import { PacksHasProductsService } from './packs-has-products.service';

describe('PacksHasProductsService', () => {
  let service: PacksHasProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacksHasProductsService],
    }).compile();

    service = module.get<PacksHasProductsService>(PacksHasProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
