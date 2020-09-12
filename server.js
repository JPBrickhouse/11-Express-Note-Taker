
//----------------------------------------------------
// Dependencies
// Express npm package required to run the Express server
var express = require("express");

//----------------------------------------------------
// Express configuration
// Establishing the basic properties of our Express server

// Tells node.js to create an Express server
var app = express();

// Sets an initial port to be used later in the listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// https://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

//----------------------------------------------------
// Routing
// Pointing the server to a collection of route files
// The routes serve as a map
// And the map describes how to respond when users visit or request data from the URLs

// apiRoutes has to come first, because...
// htmlRoutes has a "catch-all" route "*"
// and that "catch-all" route needs to be the last thing to run
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//----------------------------------------------------
// Listener
// This code starts the server and has it listening
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
