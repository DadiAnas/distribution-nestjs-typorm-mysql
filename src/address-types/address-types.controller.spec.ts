import { Test, TestingModule } from '@nestjs/testing';
import { AddressTypesController } from './address-types.controller';

describe('AddressTypesController', () => {
  let controller: AddressTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressTypesController],
    }).compile();

    controller = module.get<AddressTypesController>(AddressTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
