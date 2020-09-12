
//----------------------------------------------------
// Path package required to get the correct file paths for the html files
var path = require("path");

//----------------------------------------------------
// ROUTING
// Exporting the HTML GET requests
module.exports = function (app) {

    // The code below handles when users "visit" a page
    // In each of the cases below, a user is show the HTML content

    // If the route is /notes, display the notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // If no matching route is found, default displaying to the index.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}