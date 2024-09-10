// import the Media class:
const Media = require("./Media");
// create your Book class:
class Book extends Media {
	constructor(title, year, genre, author, numPages, rating) {
		super(title, year, genre);
		this.author = author;
		this.numPages = numPages;
		this.rating = rating;
	}
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
    static highestRating(books){
        let highestRatingBook = books[0];

        for(const book of books){
            if (book.rating > highestRatingBook.rating){
                highestRatingBook = book
            }
        }
        return highestRatingBook;
    }
}
// don't change below
module.exports = Book;
