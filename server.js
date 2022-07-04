const express = require('express');
const { notes } = require('./data/db.json');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.delete('/api/notes/:id', (req, res) => {
//     const id = req.params.id;

//     notes.findByIdAndDelete(id)
//     .then(result => {
//         res.json({ redirect: '/api/notes' })
//     })
//     .catch(err => {
//         console.log(err);
//     })
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});