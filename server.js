// const fs = require('fs');
// const path = require('path');
const express = require('express');
const { notes } = require('./data/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(note => note.text === query.text);
    }
    return filteredResults;
}

app.get('/api/notes', (req, res) => {
    // res.json(notes);
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

/*
app.post('/api/notes', (req, res) => {
  // set id based on what the next index of the array will be
    // req.body.id = notes.length.toString();

  // if any data in req.body is incorrect, send 400 error back
    // if (!validateNote(req.body)) {
    // res.status(400).send("This note does not exist.");
    // } else {
    // const notes = createNewNote(req.body, notes);
    // res.json(notes);
    // }
})
*/

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

// middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// });

// function filterByQuery(query, notesArray) {
//     let filteredResults = notesArray;
//     if (query.title) {
//         filteredResults = filteredResults.filter(note => note.title === note.title);
//     }
//     if (query.text) {
//         filteredResults = filteredResults.filter(note => note.text === note.text);
//     }
//     return filteredResults;
// }

// app.get('/api/notes', (req,res) => {
//     let results = notes;
//     if (req.query) {
//         results = filterByQuery(req.query, results);
//     }
//     res.json(results);
//     Read the db.json file and return all saved notes as JSON
// });