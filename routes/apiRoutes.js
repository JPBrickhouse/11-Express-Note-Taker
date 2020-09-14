
//----------------------------------------------------
// Loading the data
// Link the routes to the data sources
// The data is held in a json array of objects
const db = require("../db/db.json");

// The fs module enables interacting with the file system
const fs = require("fs");

// The uuid module creates unique ids
// uuid (universally unique identifier)
// Syntax from the following website:
// https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');

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
    app.post("/api/notes", function (req, res) {
        // Creates a newNote object
        var newNote = {
            // uuid unique id syntax from the following:
            // https://www.npmjs.com/package/uuid
            id: uuidv4(),
            // Gets the note title and text from the request body
            title: req.body.title,
            text: req.body.text
        }

        console.log(newNote);

        // Adds the new note the db.json file

    });



    // DELETE request



};