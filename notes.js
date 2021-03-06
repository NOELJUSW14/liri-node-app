


var divider = "\n------------------------------------------------------------\n\n";
//Input 

fs.appendFile("random.txt", term, err => {
   if(err) throw(err);
   console.log("Your command has been saved!")
})
//callback function with (err)

//read and apply commands saved to random.txt
fs.readFile("random.txt", "utf8", function(err, data){
   if(err){
      return console.log(err);
   }
   var commandArray = data.split(",")
   console.log(commandArray)
})

//Url's
var spotifyURL = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx';

function doWhatItSays(command) {

   //(--------------------------------NEXT COMMAND-------------------------------------------------------)
  
fs.readFile("random.txt", (err,data))
   // `do-what-it-says`

   // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

   //   * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

   //   * Edit the text in random.txt to test out the feature for movie-this and concert-this.

};

spotifyThisSong = function(){
   class spotify {
     
      }
   
   
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
};
movieThis = function(){
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
};
//Switch statement to know what function to perfom on user input in command line progress.argv(3)





//   * **Important**: There is no need to sign up for a Bands in Town `api_id` key. Use the `codingbootcamp` as your `app_id`. For example, the URL used to search for "Celine Dion" would look like the following:

//      `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
//(--------------------------------NEXT COMMAND-------------------------------------------------------)
   

