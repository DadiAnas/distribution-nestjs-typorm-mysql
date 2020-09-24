import { Test, TestingModule } from '@nestjs/testing';
import { PaletsService } from './palets.service';

describe('PaletsService', () => {
  let service: PaletsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaletsService],
    }).compile();

    service = module.get<PaletsService>(PaletsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
