//here we are adding a package to help us get the correct file path for the html 
var path = require("path");
const router = require("express").Router();
 //the route

// router.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
// });

// router.get("/", (req, res) => {
//     const indexPath = path.join(__dirname, "../pub")
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });
router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath, (err) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error serving index.html');
        }
    });
});



module.exports = router;