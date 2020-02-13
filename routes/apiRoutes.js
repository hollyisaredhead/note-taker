var note = require("./noteData");
var uniqid = require('uniqid');

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notes);
    })
};

app.post("/api/notes", function (req, res) {
    let data = req.body; 
    data.id = id;

    console.log(data);

    return res.json(data);
})