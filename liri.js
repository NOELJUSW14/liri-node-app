 //require .env file
 require("dotenv").config();
 //Require axios
  let axios = require("axios");
//   // require moments
//   let moment = require('moment');
  // Spotify from npm
  var Spotify = require('node-spotify-api');
//   // link keys.js file
  var keys = require("./keys.js");
  // require File System
  //var fs = require("fs");
  //Spotify keys
  var spotify = new Spotify(keys.spotify);

//   //Comman line array
   const [node, file, ...args] = process.argv;

  //let command = args[0]
  let term = args.slice(1).join("+");

//   let doThis = function(command) {
   //  switch (command) {
   //     case `concert-this`:{
   //      if (args[0] === undefined){
   //         let term = 'Celine Dion'

   //          console.log(consertThis())
   //      }
   //      else{
           
   //       console.log(consertThis())
   //       }
   //   };
   //        break;
 
   //     case `spotify-this-song`:{
   //      if (args[0] === undefined){
   //         let term = "The Sign, Ace of Base"
   //          console.log(spotifyThisSong())
   //      }
   //      else{
   //         console.log(spotifyThisSong())
   //      }
   //   };
          
   //        break;
 
   //     case `movie-this`:{
   //        if (args[0] === undefined){
   //           let term = 'Mr.Nobody'
   //            conole.log(movieThis())
   //        }
   //        else{
   //           console.log(movieThis())
   //        }
   //     }
          
   //        break;
 
   //     default:
   //        console.log("Try Again!")
   //        break;
 
   //  };

//  function concertThis(){
//     let queryURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
//     axios.get(queryURL).then(response => {
        
//         var artist = response.data;
//         var venue = artist.venue;
//         var location = `${artist.venue.city}` + "," + `${artist.venue.region}`
//         artist.forEach(venue => {
//            console.log(showData)
//         });
//          var showData = [
//             //    * Name of the venue
//            "Venue: " + artist.venue.name,
//             //    * Venue location
//             "Location: " + artist.location,
//             //    * Date of the Event (use moment to format this as "MM/DD/YYYY")
//       //      "Date:" + artist.rating.average,
//          ].join("\n\n");
//         console.log(artist)

//    //      fs.appendFile("random.txt", showData + divider, function (err) {
//            if (err) throw (err);
//            console.log(showData)
//         })
//         fs.readFile("random.txt",(err,"concert-this"))
//       .catch(function(error) {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           // that falls out of the range of 2xx
//           console.log("---------------Data---------------");
//           console.log(error.response.data);
//           console.log("---------------Status---------------");
//           console.log(error.response.status);
//           console.log("---------------Status---------------");
//           console.log(error.response.headers);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an object that comes back with details pertaining to the error that occurred.
//           console.log(error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log("Error", error.message);
//         }
//         console.log(error.config);
//       });
//  };


//  function spotifyThisSong(){
    spotify.search({ type: 'track', query: term }).then(function(data){
      console.log(data.tracks.items[0].artists[0].name);
    }).catch(function(error){
      if(error.response){
         return console.log('Alert:'+ error);
     }
     
    })

 


//   function movieThis(){
//   let queryURL = "http://www.omdbapi.com/?t=" + term +"&y=&plot=short&apikey=trilogy";
//     axios.get(queryURL).then(response => {
      
//       var movie = response.data;
//       var movieData = [
//          "Movie Title:" + movie.Title,
//        `Release Year:` + movie.Year,
//        `IMDB Rating:` + movie.imdbRating,
//        "Rotten Tomatoes Rating:" + movie.Ratings[1].Value,
//        `Produced in:` + movie.Country,
//        `Language:` + movie.Language,
//        `Plot:` + movie.Plot,
//        `Starring:` + movie.Actors,
//       ]
        
//       console.log(movieData);
//         })
//         .catch(function(error) {
//           if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.log("---------------Data---------------");
//             console.log(error.response.data);
//             console.log("---------------Status---------------");
//             console.log(error.response.status);
//             console.log("---------------Status---------------");
//             console.log(error.response.headers);
//           } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an object that comes back with details pertaining to the error that occurred.
//             console.log(error.request);
//           } else {
//             // Something happened in setting up the request that triggered an Error
//             console.log("Error", error.message);
//           }
//           console.log(error.config);
//         });
//  };
