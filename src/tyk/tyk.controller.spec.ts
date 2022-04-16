import { Test, TestingModule } from '@nestjs/testing';
import { TykController } from './tyk.controller';

describe('TykController', () => {
  let controller: TykController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TykController],
    }).compile();

    controller = module.get<TykController>(TykController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
