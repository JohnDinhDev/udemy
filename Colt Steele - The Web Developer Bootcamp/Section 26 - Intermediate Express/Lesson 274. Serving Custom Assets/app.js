const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // tells express to serve static files in 'public'
app.set('view engine', 'ejs'); // tells express that we are going to use ejs files

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/fallinlovewith/:thing', (req, res) => {
    const thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get('/posts', (req, res) => {
    const posts = [
        {title: 'Post 1', author :'Susy'},
        {title: 'Nezuko is the best waifu', author :'Tanjirou'},
        {title: 'How to become a full-stack wix developer', author :'Dolan'},
        {title: 'Why am I doing this', author :'Me'},
        {title: 'Goodbye my youthful days', author :'Also me'},
    ]
    res.render('posts.ejs', {posts: posts});
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});