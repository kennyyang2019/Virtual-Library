// import the Media class:
const Media = require("./Media");
// create your Movie class:
class Movie extends Media {
	constructor(title, year, genre, director, duration, rating) {
		super(title, year, genre);
		this.director = director;
		this.duration = duration;
		this.rating = rating;
	}
	summary() {
		return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
	}
    // Duration: ${this.duration}
    static longestMovie(movies){
        let longestMovie = movies[0];
        for (const movie of movies){
            if (movie.duration > longestMovie.duration){
                longestMovie = movie;
            }
        }
        return longestMovie
    }
}
// don't change below
module.exports = Movie;