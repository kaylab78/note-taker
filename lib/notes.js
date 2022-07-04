const fs = require('fs');
const path = require('path');

// function filterByQuery(query, notesArray) {
//     let filteredResults = notesArray;
//     if (query.title) {
//         filteredResults = filteredResults.filter(note => note.title === query.title);
//     }
//     if (query.text) {
//         filteredResults = filteredResults.filter(note => note.text === query.text);
//     }
//     return filteredResults;
// }

// function findById(id, notesArray) {
//     const result = notesArray.filter(note => note.id === id)[0];
//     return result;
// }

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function deleteNote(id, notesArray) {
    const noteId = id;
    for (let i = 0; i < notesArray.length; i++) {
        if (noteId === notesArray[i].id) {
            notesArray.splice(i, 1)
            fs.writeFileSync(
                path.join(__dirname, '../data/db.json'),
                JSON.stringify({ notes: notesArray }, null, 2), err => {
                    if (err) {
                        throw err;
                    }
                }
            );
        }
    }
}

module.exports = { createNewNote, validateNote, deleteNote }