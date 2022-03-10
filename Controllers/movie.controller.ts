import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiConsumes, ApiProduces, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MovieDto } from "../dto/movie.dto";
import { MovieService } from "../Services/movie.service";

@ApiConsumes('application/json')
@ApiProduces('application/json')
@ApiTags('movie')
@Controller('movie')
export class MovieController {
    constructor(
        private movieService: MovieService
    ) {

    }

    @ApiResponse({ status: 200, description: 'movies succeed', })
    @ApiResponse({ status: 404, description: 'ressource absente' })
    @Get()
    getMovies() {
        return this.movieService.getMovies();
    }

    @ApiResponse({ status: 200, description: 'movies succeed', })
    @ApiResponse({ status: 404, description: 'ressource absente' })
    @Get('/:id')
    getMovie(@Param() id: string) {
        return this.movieService.getMovie(id);
    }

    @ApiResponse({ status: 201, description: 'movies add succeed', })
    @ApiResponse({ status: 422, description: 'validation impossible' })
    @Post()
    addMovie(@Body() movie: MovieDto) {
        return this.movieService.createMovie(movie);
    }

    @ApiResponse({ status: 201, description: 'movies add succeed', })
    @ApiResponse({ status: 422, description: 'validation impossible' })
    @Put('/update')
    updateMovie(@Body() movie: MovieDto) {
        return this.movieService.updateMovie(movie);
    }

    @Delete('/:id')
    deleteMovie(@Param() id: string) {
        this.movieService.deleteMovie(id);
    }
}