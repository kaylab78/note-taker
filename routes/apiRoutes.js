const router = require("express").Router();
const { notes } = require("../data/db.json");
const { createNewNote, validateNote, deleteNote } = require("../lib/notes");

// reads the db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});


router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('Your note is not properly formatted.');
    } else {
        // saves new note to the request body. returns new note to client.
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

// receives query parameter with id of note to delete. removes note and rewrites notes to db.json file.
router.delete('/notes/:id', (req,res) => {
    const params = req.params.id;
    deleteNote(params, notes);
    res.redirect('');
})

module.exports = router;