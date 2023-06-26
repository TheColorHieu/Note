//here we are adding a package to help us get the correct file path for the html 
var path = require("path");
const router = require("express").Router();

// //the route

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});



module.exports = router;