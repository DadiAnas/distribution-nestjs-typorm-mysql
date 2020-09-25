import { Test, TestingModule } from '@nestjs/testing';
import { DistributeursService } from './distributeurs.service';

describe('DistributeursService', () => {
  let service: DistributeursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributeursService],
    }).compile();

    service = module.get<DistributeursService>(DistributeursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
