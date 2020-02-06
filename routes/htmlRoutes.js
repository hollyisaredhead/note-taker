var path = require("path");

module.exports = function (app) {
    
    //vist notes
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(_dirname, "../notes.html"));
    });

    //home path
    app.get("*", function (req, res) {
        res.sendFile(path.join(_dirname, "../index.html"));
    })
};