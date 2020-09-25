import { Test, TestingModule } from '@nestjs/testing';
import { AddressTypesService } from './address-types.service';

describe('AddressTypesService', () => {
  let service: AddressTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressTypesService],
    }).compile();

    service = module.get<AddressTypesService>(AddressTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
