//here we are adding a package to help us get the correct file path for the html 
var path = require("path");

//the route
var htmlRoutes = function(app){
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

};

module.exports = htmlRoutes;