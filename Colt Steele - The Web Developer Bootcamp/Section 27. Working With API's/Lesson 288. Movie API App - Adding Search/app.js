const express = require('express');
const request = require('request');
const port = 3000;

const app = express();
// app.use(express.urlencoded({extended: true}));
app.set('view engine', ('ejs'));

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    const query = req.query['movie-title'];
    const url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body).Search;
            res.render('results', {results: data});
        }
    })
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});