import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MovieDto } from "../dto/movie.dto";


@Entity({ name: 'movie' })
export class Movie {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id?: string;

    @Column('varchar', { name: 'nom', length: 128 })
    nom?: string;

    @Column('text', { name: 'description', nullable: true })
    description?: string;

    @Column('datetime', { name: 'date', nullable: true })
    date?: Date;

    @Column('int', { name: 'note', nullable: true })
    note?: number;

    toDto(): MovieDto {
        return {
            id: this.id,
            nom: this.nom,
            description: this.description,
            date: this.date,
            note: this.note,
        }
    }

    fromDto(dto: MovieDto) {
        this.id = dto.id;
        this.nom = dto.nom;
        this.date = dto.date;
        this.description = dto.description;
        this.note = dto.note;
    }

}