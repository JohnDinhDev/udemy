const express = require('express');
const request = require('request');
const port = 3000;

const app = express();

app.get('/results', (req, res) => {
    request('http://www.omdbapi.com/?s=Jackie+Chan&apikey=thewdb', (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const results = JSON.parse(body).Search;
            console.log(results)
            res.send(results[0].Title);
        }
    })
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});