
//----------------------------------------------------
// Loading the data
// Link the routes to the data sources
// The is held in a json array of objects
var db = require("../db/db.json");

// The fs module enables interacting with the file system
var fs = require("fs");

//----------------------------------------------------
// ROUTING
// Exporting the API requests
module.exports = function (app) {

    // GET request
    app.get("/api/notes", function (req, res) {

        res.send(db);
    });





    // POST request




    // DELETE request



};