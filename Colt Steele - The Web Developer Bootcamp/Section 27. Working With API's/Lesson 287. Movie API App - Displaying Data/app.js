const express = require('express');
const request = require('request');
const port = 3000;

const app = express();

app.set('view engine', ('ejs'));

app.get('/results', (req, res) => {
    request('http://www.omdbapi.com/?s=Jackie+Chan&apikey=thewdb', (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body).Search;
            res.render('results', {results: data});
        }
    })
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});