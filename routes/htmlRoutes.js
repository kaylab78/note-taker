const path = require('path');
const router = require("express").Router();

// returns the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// return the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;