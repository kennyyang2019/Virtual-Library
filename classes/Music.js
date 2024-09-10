// import the Media class:
const Media = require("./Media")
// create your Music class:
class Music extends Media {
	constructor(title, year, genre, artist, length) {
		super(title, year, genre);
		this.artist = artist;
		this.length = length;
	}
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
    static shortestAlbum(songs){
        let shortestSong = songs[0];
        for (const song of songs){
            if (song.length < shortestSong.length){
                shortestSong = song;
            }
        }
        return shortestSong;
    }
}
// don't change below
module.exports = Music;
