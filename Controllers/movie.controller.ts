import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { MovieDto } from "../dto/movie.dto";
import { MovieService } from "../Services/movie.service";

@ApiTags('movie')
@Controller('movie')
export class MovieController {
    constructor(
        private movieService: MovieService
    ) {

    }

    @Get()
    getMovies() {
        return this.movieService.getMovies();
    }

    @Get('/:id')
    getMovie(@Param() id: string) {
        return this.movieService.getMovie(id);
    }

    @Post()
    addMovie(@Body() movie: MovieDto) {
        return this.movieService.createMovie(movie);
    }

    @Put('/update')
    updateMovie(@Body() movie: MovieDto) {
        return this.movieService.updateMovie(movie);
    }

    @Delete('/:id')
    deleteMovie(@Param() id: string) {
        this.movieService.deleteMovie(id);
    }
}