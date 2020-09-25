import { Test, TestingModule } from '@nestjs/testing';
import { DistributeurHasProductService } from './distributeur-has-product.service';

describe('DistributeurHasProductService', () => {
  let service: DistributeurHasProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributeurHasProductService],
    }).compile();

    service = module.get<DistributeurHasProductService>(DistributeurHasProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
