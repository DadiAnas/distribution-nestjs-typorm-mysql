import { Test, TestingModule } from '@nestjs/testing';
import { PacktypesService } from './packtypes.service';

describe('PacktypesService', () => {
  let service: PacktypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacktypesService],
    }).compile();

    service = module.get<PacktypesService>(PacktypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
