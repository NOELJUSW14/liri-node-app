  //require .env file
  require("dotenv").config();
 //Require axios
  let axios = require("axios");
  // require moments
  let moment = require('moment');
  // Spotify from npm
  var Spotify = require('node-spotify-api');
  // link keys.js file
  var keys = require("./keys.js");
  // require File System
  var fs = require("fs");
  //Spotify keys
  var spotify = new Spotify(`${keys.spotify}`);

  //Comman line array
  const [node, file, ...args] = process.argv

  let command = args[0]
  let term = args.slice(1).join("+")

  let doThis = function(command) {
    switch (command) {
       case `concert-this`:{
        if (args[1] === undefined){
            consertThis('Celine+Dion')
        }
        else{consertThis(term)}
     };
          break;
 
       case `spotify-this-song`:{
        if (args[1] === undefined){
            spotifyThisSong("The+Sign+by+Ace+of+Base")
        }
        else{spotifyThisSong(term)}
     };
          
          break;
 
       case `movie-this`:{
          if (args[1] === undefined){
              movieThis('Mr.Nobody')
          }
          else{movieThis(term)}
       }
          
          break;
 
       default:
          console.log("Try Again!")
          break;
 
    }
    console.log(doThis)
 };

 function consertThis(){
    axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp").then(response => {
        console.log(response.data)
        
        // var artist = response.data;
        // var showData = [
        //    //    * Name of the venue
        //    "Venue: " + artist.name,
        //    //    * Venue location
        //    "Location: " + artist.genres.join(", "),
        //    //    * Date of the Event (use moment to format this as "MM/DD/YYYY")
        //    "Date:" + artist.rating.average,
        // ].join("\n\n");

        // fs.appendFile("random.txt", showData + divider, function (err) {
        //    if (err) throw (err);
        //    console.log(showData)
        // })
        // fs.readFile("random.txt",(err,"concert-this"))
     }).catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
 };


 function spotifyThisSong(){
    spotify.search({ type: 'track', query: termToString(term) }, function(err,data){
        if(err){
            return console.log('Alert:'+ err);
        }
        console.log(response);
    })

 };


 function movieThis(){
    axios.get("http://www.omdbapi.com/?t=" + term +"&y=&plot=short&apikey=trilogy").then(response => {
          console.log(response.data);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
 };

  

  
   
  //Spotify Class
// class Spotify{
//     constructor(){
       
//  }};  

 