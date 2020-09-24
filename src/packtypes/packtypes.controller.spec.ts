import { Test, TestingModule } from '@nestjs/testing';
import { PacktypesController } from './packtypes.controller';

describe('PacktypesController', () => {
  let controller: PacktypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacktypesController],
    }).compile();

    controller = module.get<PacktypesController>(PacktypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
