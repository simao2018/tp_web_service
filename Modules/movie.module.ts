import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieController } from "../Controllers/movie.controller";
import { Movie } from "../entities/movie.entity";
import { MovieService } from "../Services/movie.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Movie
        ])
    ],
    controllers: [MovieController],
    providers: [MovieService]
})

export class MovieModule { }