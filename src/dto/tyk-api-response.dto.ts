import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TykApiResponseDto {

  @IsString()
  @ApiProperty({ description: '제목'})
  readonly title: string;

}
