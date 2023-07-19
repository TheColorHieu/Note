const fs = require("fs");
const express = require("express");

const router = express.Router();
router.use(express.json());

const notes = require("../db/db.json");

// here we will be displaying all of the notes
router.get("/notes", function(req, res) {
  return res.json(notes);
});

// here we will be returning a single note
router.get("/notes/:id", function(req, res) {
  let chosenId = req.params.id;

  // creating a for loop to cycle through the notes
  for (let i = 0; i < notes.length; i++) {
    // check if the ID matches
    if (chosenId == notes[i].id) {
      return res.json(notes[i]);
    }
  }

  // If the note with the given ID is not found, return false
  return res.json(false);
});

// here we are creating the post routes to make new notes
router.post("/notes", function(req, res) {
  // Generate a new ID for the note
  const newId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;

  // Create a new note object
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: newId
  };

  // Push the new note to the array
  notes.push(newNote);

  // Convert the notes array to a string
  const notesString = JSON.stringify(notes);

  // Write the updated notes array to the db.json file
  fs.writeFile("./db/db.json", notesString, function(err) {
    if (err) throw err;
    console.log("Note added!");
  });

  res.json(newNote);
});

// here we will be making a route to delete a note
router.delete("/notes/:id", function(req, res) {
  // Get the ID of the note to be deleted
  const chosenId = req.params.id;

  // Find the index of the note with the matching ID
  const deleteIndex = notes.findIndex(note => note.id == chosenId);

  // If the note is found, remove it from the array
  if (deleteIndex !== -1) {
    const deletedNote = notes.splice(deleteIndex, 1)[0];
    // Convert the updated notes array to a string
    const notesString = JSON.stringify(notes);
    // Write the updated notes array to the db.json file
    fs.writeFile("./db/db.json", notesString, function(err) {
      if (err) throw err;
      console.log("Note Deleted!");
    });
    res.send(deletedNote);
  } else {
    // If the note with the given ID is not found, send an error response
    res.status(404).json({ error: "Note not found" });
  }
});

module.exports = router;

