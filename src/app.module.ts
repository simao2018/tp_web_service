import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MovieModule } from '../Modules/movie.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'moviedb',
      entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
