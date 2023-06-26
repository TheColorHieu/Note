//here we are creating api routes and linking them together 
//we will be connecting our routes to a series of data
const notes = require("../db/db.json");
const fs = require("fs");
const app = require("express").Router();

//here we will be making our api functions such as get/post/delete
module.exports = function(){

    //here we will be displaying all of the notes
    app.get("/notes", function(req,res){
        return res.json(notes);
    });

    //here we will be returning a single note 
    app.get("/api/notes/:id", function(req, res){
        let chosen = req.params.note;

        //creating a for loop to cycle through the notes
        for(let i = 0; i < notes.length; i++){
            //add an id to the notes
            if(chosen === notes[i].id){
                return res.json(chosen);
            }
            else{
                return res.json(false);
            }
        }
    });

    //here we are creating the post routes to make new notes
    app.post("/api/notes", function(req, res){
        //req.body hosts is equal to the JSON post sent from the user 
        //this works beause of our body parsing middleware
        for(i = 0; i < notes.length; i++){
            //adding the ID to the new notes
            var newNote =
            {
                title: req.body.title,
                text: req.body.text,
                id: i
            }
        }
        //well then push the new note to the array of original database json file
        notes.push(newNote);
        //turn the notes object array into a string
        let notesString = JSON.stringify(notes);
        //write the array of notes/objects to the db.json file
        fs.writeFile("../db/db.json", notesString, function (err){
            if(err) throw err;
            console.log("Note added!");
        });
    });

    //here we will be making a route to delete a note 
    app.delete("/api/notes/:id", function(req, res){
        //we gotta get the id of the note we want to delete
        let chosen = req.params.id;
        //since we only have the ID of the object we want to get the entire object from the array
        //find() will fetch the object from the array whose id is equal to the deleteId and assign
        //it to the deleteObj
        let deleteObj = notes.find(user.id == chosen);
        //find the index of the object fetched from the JSON array
        let deleteIndex = notes.indexOf(deleteObj);
        //splice will remove the object from the JSON
        notes.splice(deleteIndex,1);
        //send the deleted object as response
        res.send(deleteObj);
        //turn the notes object array into a string
        let noteString = JSON.stringify(notes);
        //write the array of note/objects to te db.json file
        function saveNotesToDb() {
        fs.writeFile("./db/db.json", noteString, function(err){
            if(err) throw err;
            console.log("Note Deleted!");
        });
        }
        return app;
    });
};
module.exports = app;