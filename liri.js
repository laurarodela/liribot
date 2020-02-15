require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var fs = require("fs");

var firstCommand = process.argv[2];
var secondCommand = process.argv[3];

var spotifySong = function(song) {
    if(song) {
        song = "Life is Good"
    }

    var spotify = new Spotify(keys.spotify);
    spotify.search({query: song}, function(err, data){
        if(err) {
            return console.log(err)
        }

        var songInfo = data.tracks.items[0];
    })
}

var thisMoive = function(Moive) {
    if(movie) {
        movie = "Breakfast at Tiffany's"
    }
}