
//----------------------------------------------------
// Loading the data
// Link the routes to the data sources
// The data is held in a json array of objects
const db = require("../db/db.json");

// The fs module enables interacting with the file system
const fs = require("fs");

// The uuid module creates unique ids
// uuid (universally unique identifier)
const uuid = require ("uuid");

//----------------------------------------------------
// ROUTING
// Exporting the API requests
module.exports = function (app) {

    // GET request
    // Reads the db.json file and returns all the saved notes as JSON
    app.get("/api/notes", function (req, res) {
        res.send(db);
    });

    // POST request
    app.post("/api/notes", function (req,res) {
        // Receives a new note to save on the request body
        var newNote = req.body;
        console.log(newNote);
        

        // Adds the new note the db.json file

    });



    // DELETE request



};