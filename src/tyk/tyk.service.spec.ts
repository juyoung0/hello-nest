import { Test, TestingModule } from '@nestjs/testing';
import { TykService } from './tyk.service';

describe('TykService', () => {
  let service: TykService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TykService],
    }).compile();

    service = module.get<TykService>(TykService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
