const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', (req, res) => {
    const thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing});
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});