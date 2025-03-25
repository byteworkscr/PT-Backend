import { Test, TestingModule } from '@nestjs/testing';
import { StellarController } from './stellar.controller';

describe('StellarController', () => {
  let controller: StellarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StellarController],
    }).compile();

    controller = module.get<StellarController>(StellarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
