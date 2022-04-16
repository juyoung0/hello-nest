import { Controller, Get, Post } from '@nestjs/common';
import { TykService } from './tyk.service';
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@Controller('tyk')
export class TykController {

  constructor(private readonly TykService: TykService) {

  }

  @Get('api/apis')
  @ApiOperation({ summary: 'Tyk API 목록 요청 API', description: 'HttpResponse 모듈 사용' })
  @ApiTags('Tyk Dashboard API')
  @ApiBearerAuth('Authorization')
  getAllApi(): {}{
    return this.TykService.getAllApi();
  }

  @Get('api/apis2')
  @ApiOperation({ summary: 'Tyk API 목록 요청 API', description: 'axios 사용' })
  @ApiTags('Tyk Dashboard API')
  @ApiBearerAuth('Authorization')
  getAllApi2(){
    return this.TykService.getAllApi2();
  }

  @Post('api/apis')
  @ApiOperation({ summary: 'Tyk API 생성 API', description: 'axios 사용' })
  @ApiTags('Tyk Dashboard API')
  @ApiBearerAuth('Authorization')
  createApi(){
    return this.TykService.createApi();
  }

}
