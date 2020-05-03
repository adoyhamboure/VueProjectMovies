export class Movie {
    id
    title
    year
    synopsis
    language
    director
    genre
    posterURL
    notation

    constructor(id, title, year, synopsis, language, director, genre, posterURL, notation){
        this.id = id
        this.title = title
        this.year = year
        this.synopsis = synopsis
        this.language = language
        this.director = director
        this.genre = genre
        this.posterURL = posterURL
        this.notation = notation
    }
}