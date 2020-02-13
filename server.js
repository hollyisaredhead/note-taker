var express = require("express");

//creating an express server
var app = express();

var PORT = process.env.PORT || 8040;

//help with data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//point our server to a series of "route" files 

//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//start server

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});