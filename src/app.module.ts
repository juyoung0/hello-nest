import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TykModule } from './tyk/tyk.module';

@Module({
  imports: [MoviesModule, TykModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
