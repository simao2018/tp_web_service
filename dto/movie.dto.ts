import { ApiPropertyOptional } from "@nestjs/swagger";

export class MovieDto {
    @ApiPropertyOptional()
    id?: string;

    @ApiPropertyOptional()
    nom?: string;

    @ApiPropertyOptional()
    description?: string;

    @ApiPropertyOptional()
    date?: Date;

    @ApiPropertyOptional()
    note?: number;
}