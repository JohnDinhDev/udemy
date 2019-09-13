const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/friends', (req, res) => {
    const friends = ["Tony", "Miranda", "Justin", "Lilly", "John"];
    res.render('friends', {friends: friends});
});

app.post('/addFriend', (req, res) => {
    res.send('You have reached the post route');
})

app.listen(port, () => {
    console.log(`App is now listening on port ${port}`);
});