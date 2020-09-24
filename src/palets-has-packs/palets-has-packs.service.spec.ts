import { Test, TestingModule } from '@nestjs/testing';
import { PaletsHasPacksService } from './palets-has-packs.service';

describe('PaletsHasPacksService', () => {
  let service: PaletsHasPacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaletsHasPacksService],
    }).compile();

    service = module.get<PaletsHasPacksService>(PaletsHasPacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
