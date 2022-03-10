import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MovieDto } from "../dto/movie.dto";
import { Movie } from "../entities/movie.entity";

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie)
        private readonly movieRepository: Repository<Movie>
    ) { }

    async getMovies(): Promise<MovieDto[]> {
        let moviesResponse: Movie[];
        try {
            moviesResponse = await this.movieRepository.find();
        } catch (err) {
            console.log(err);
        }
        return moviesResponse?.map(x => x.toDto());
    }

    async getMovie(id: string): Promise<MovieDto> {
        let movieResponse: Movie;
        try {
            movieResponse = await this.movieRepository.findOne({ where: { id: id } });
        }
        catch (err) {
            console.log('err : ', err);
        }
        return movieResponse.toDto();
    }

    async createMovie(movieDto: MovieDto) {
        let movieResponse = new Movie();
        try {
            movieResponse.fromDto(movieDto);
            movieResponse = await this.movieRepository.save(movieResponse);
        } catch (err) {
            console.log("🚀 ~ createMovie ~ err", err)
        }
        return movieResponse.toDto();
    }

    async updateMovie(movieDto: MovieDto) {
        return await this.movieRepository.update(movieDto.id, movieDto);
    }

    async deleteMovie(id: string) {
        return await this.movieRepository.delete(id);
    }
}