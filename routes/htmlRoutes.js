//here we are adding a package to help us get the correct file path for the html 
var path = require("path");
const router = require("express").Router();

router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath, (err) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error serving index.html');
        }
    });
});

//here we are getting our notes 
router.get('/notes', (req, res) => {
    const notesPath = path.join(__dirname, '../public/notes.html');
    console.log(notesPath);
    res.sendFile(notesPath, (err) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error serving notes.html');
        }
    });
});



module.exports = router;