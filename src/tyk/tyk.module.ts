import { Module } from '@nestjs/common';
import { TykController } from './tyk.controller';
import { TykService } from './tyk.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [TykController],
  providers: [TykService]
})
export class TykModule {}
