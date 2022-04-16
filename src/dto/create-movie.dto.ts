import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {

  @IsString()
  @ApiProperty({ description: '제목 '})
  readonly title: string;

  @IsNumber()
  @ApiProperty({ description: '년 '})
  readonly year: number;

  @IsOptional()
  @ApiProperty({ description: '장르 '})
  @IsString({ each: true })
  readonly genres: string[];
}
