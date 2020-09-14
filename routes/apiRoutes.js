
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

    // GET
    // Reads the db.json file and returns all the saved notes as JSON
    app.get("/api/notes", function (req, res) {
        // Sending the db.json as the response
        res.send(db);
    });

    // POST
    app.post("/api/notes", function (req, res) {
        // Creates a newNote object
        var newNote = {
            // uuid unique id syntax from the following:
            // https://www.npmjs.com/package/uuid
            id: uuidv4(),
            // Gets the note title and text from the request body
            title: req.body.title,
            text: req.body.text
        };

        // Adds the new note the db.json file
        db.push(newNote);

        // Sending the newNote as the response
        res.send(newNote);
    });
    
    // DELETE
    app.delete("/api/notes/:id", function (req,res) {

        // Getting the unique note ID from the request
        // This is the ID of the note we want to delete
        var noteID = req.params.id
        
        // Using forEach to go through the db.json, which is an array of objects
        db.forEach(object => {
            // if object.id corresponds to noteID
            // (Meaning that the object in question is the note we want to delete)
            if(object.id === noteID) {
                // Use indexOf to get the index of the object within the db.json array
                // Save it as a variable called objectIndex
                var objectIndex = db.indexOf(object);
                // Use splice to remove the object at that index in the db.json array
                // (The second parameter, 1, means that we're only removing 1 item, which
                // means that we're only removing 1 object - the note - from the array)
                db.splice(objectIndex,1);
            }
        });

        // Sending the db.json as the response
        res.send(db);
    })
};