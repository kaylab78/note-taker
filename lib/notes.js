const fs = require('fs');
const path = require('path');

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