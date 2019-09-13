const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const friends = ["Tony", "Miranda", "Justin", "Lilly", "John"];


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/addFriend', (req, res) => {
    const newFriend = req.body.name;
    friends.push(newFriend);
    res.render('friends', {friends: friends});
});

app.get('/friends', (req, res) => {
    res.render('friends', {friends: friends});
});

app.listen(port, () => {
    console.log(`App is now listening on port ${port}`);
});