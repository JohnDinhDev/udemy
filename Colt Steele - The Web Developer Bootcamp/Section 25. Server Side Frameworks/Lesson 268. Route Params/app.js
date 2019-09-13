const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/dogs', (req, res) => {
    res.send('Meow');
});

app.get('/r/:subredditName', (req, res) => {
    const subredditName = req.params.subredditName;
    res.send(`Welcome to the ${subredditName} subreddit!`);
});

app.get('*', (req, res) => {
    res.send('You are a star');
});

app.listen(port, () => {
    console.log('yeet');
});