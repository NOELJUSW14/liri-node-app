//require .env file
require("dotenv").config();
//Require axios
const axios = require("axios");
// require File System
const fs = require("fs");
// link keys.js file
const keys = require("./keys.js");

//Require Spotify and spotify keys 
const Spotify = require('node-spotify-api');
const spotify = new spotify(keys.spotify);

//Omdb keys
var omdb = new omdb(keys.omdb);


var divider = "\n------------------------------------------------------------\n\n";
//Input 
var inputString = process.argv;
var inputCommand = inputString[2];
var term = inputString.slice(3).join(" ");


//Url's
var spotifyURL = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx';

//Functions
function consertThis() {

};
function spotifyThisSong() {
   spotify
    .request(spotifyURL)
    .then(function(data) {
      console.log(data); 
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    });

};
function movieThis() {

};
function doWhatItSays() {

};

command = function (inputCommand, term) {
   switch (inputCommand) {
      case `concert-this`:
         consertThis(term);
         break;

      case `spotify-this-song`:
         spotifyThisSong(term);
         break;

      case `movie-this`:
         movieThis(term)
         break;

      case `do-what-it-says`:
         doWhatItSays(term)
         break;

      default:
         console.log("Try Again!")
         break;

   }
}

class spotify {
   constructor(term)

}
class Artist {
   constructor(name, venue, location, date) {
      this.name = name,
         this.venue = venue,
         this.location = location,
         this.date = date
   }
   //  This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
   findShow = function () {
      var bandUrl = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
      axios.get(bandUrl).then(response => {
         console.log(response)
         var artist = response.data;
         var showData = [
            //    * Name of the venue
            "Venue: " + artist.name,
            //    * Venue location
            "Location: " + artist.genres.join(", "),
            //    * Date of the Event (use moment to format this as "MM/DD/YYYY")
            "Date:" + artist.rating.average,
         ].join("\n\n");

         fs.appendFile("random.txt", showData + divider, function (err) {
            if (err) throw (err);
            console.log(showData)
         })
      })





   }
}

//   * **Important**: There is no need to sign up for a Bands in Town `api_id` key. Use the `codingbootcamp` as your `app_id`. For example, the URL used to search for "Celine Dion" would look like the following:

//      `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
//(--------------------------------NEXT COMMAND-------------------------------------------------------)
   //`spotify-this-song`
   // * This will show the following information about the song in your terminal/bash window

   //   * Artist(s)

   //   * The song's name

   //   * A preview link of the song from Spotify

   //   * The album that the song is from

   // * If no song is provided then your program will default to "The Sign" by Ace of Base.

   // * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

   // * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   // Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   // Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   // Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   // Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

//(--------------------------------NEXT COMMAND-------------------------------------------------------)
   //`movie-this`
   // * This will output the following information to your terminal/bash window:

   //   ```
   //     * Title of the movie.
   //     * Year the movie came out.
   //     * IMDB Rating of the movie.
   //     * Rotten Tomatoes Rating of the movie.
   //     * Country where the movie was produced.
   //     * Language of the movie.
   //     * Plot of the movie.
   //     * Actors in the movie.
   //   ```

   // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

   //   * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

   //   * It's on Netflix!

   // * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

   //(--------------------------------NEXT COMMAND-------------------------------------------------------)

   // `do-what-it-says`

   // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

   //   * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

   //   * Edit the text in random.txt to test out the feature for movie-this and concert-this.
