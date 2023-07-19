const express = require('express');

const artistArray = require('./modules/artist.js');
const songArray = require('./modules/song.js');
const titleArray = require('./modules/title.js');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

// creating a GET route at /artist
app.get('/artist', (req, res) => {
    res.send(artistArray);
});

// TODO - Add GET for songs
app.get('/song', (req, res) => {
    res.send(songArray);
});

app.get('/title', (req, res) => {
    res.send(titleArray);
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});