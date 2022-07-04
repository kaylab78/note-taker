const router = require("express").Router();
const { notes } = require("../data/db.json");
const { createNewNote, validateNote } = require("../lib/notes");

// Read the db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// app.get('/api/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('Your note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
})

module.exports = router;