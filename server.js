//creating our express server
//here we are adding our dependencies
const express = require("express");
const path = require("path");

//setting up the express app 
const app = express();
const PORT = process.env.PORT || 3000;

//setting up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//adding our routes files so that we can have our server know how to respond.
require("./routes/apiRoutes");
require("./routes/htmlRoutes");

//here we are creating the listener so that our app can listen to our response 
app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});