import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('movies')
export class MoviesController {

  constructor(private readonly moviesService: MoviesService) {

  }

  @Get()
  @ApiOperation({ summary: '영화 목록 요청 API', description: '전체 영화 목록을 가져온다.' })
  @ApiTags('영화 API')
  getAll() :Movie[]{
    return this.moviesService.getAll();
  }

  @Get('search')
  @ApiTags('영화 API')
  search(@Query('year') searchingYear: string){
    return `We are searching for a movie made after ${searchingYear}`;
  }

  @Get('/:id')
  @ApiOperation({ summary: '영화 요청 API', description: '하나의 영화 정보를 가져한다.' })
  @ApiCreatedResponse({ description: '유저를 생성한다.', type: Movie })
  @ApiTags('영화 API')
  getOne(@Param('id') movieId: number) :Movie{
    return this.moviesService.getOne(movieId);
  }

  @Post()
  @ApiOperation({ summary: '영화 추가 API', description: '하나의 영화 정보를 추가한다.' })
  @ApiBody({type: CreateMovieDto})
  @ApiTags('영화 API')
  create(@Body() movieData: CreateMovieDto){
    return this.moviesService.createOne(movieData);
  }

  @Delete('/:id')
  @ApiOperation({ summary: '영화 삭제 API', description: '하나의 영화 정보를 삭제한다.' })
  @ApiTags('영화 API')
  remove(@Param('id') movieId: number){
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  @ApiOperation({ summary: '영화 수정 API', description: '하나의 영화 정보를 수정한다.' })
  @ApiTags('영화 API')
  patch(@Param('id') movieId: number, @Body() updatedData: UpdateMovieDto){
    return this.moviesService.update(movieId, updatedData);
  }


}
