const Campground = require('./models/campground');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// Campground.create({
//     name: 'Stary Skies Rest',
//     img: 'https://images.unsplash.com/photo-1531097517181-3de20fd3f05c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
//     description: 'This is a campsite with a stary sky',
// }, (err, campground) => {
//     if (err) return console.error(err);
//     console.log('Newly Created Campground:   ')
//     console.log(campground);
// });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});

// INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err) return console.error(err);
            res.render('index', {
                campgrounds: campgrounds
            });
    })

});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

// CREATE - add new campground to DB
app.post('/campgrounds', (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const newCampground = new Campground({
        name: name,
        img: image,
        description: description,
    });
    newCampground.save((err, campground) => {
        if (err) return console.error(err);
        console.log(`${campground.name} has been saved`);
        res.redirect('campgrounds');
    });
});

// SHOW - shows more info about one campground
app.get('/campgrounds/:id', (req, res) => {
    const id = req.params.id;
    Campground.findById(id, (err, campground) => {
        if (err) return console.error(err);
        res.render('show', {campground: campground});
    });
});


app.listen(port, () => {
    console.log(`YelpCamp server has started on port ${port}`);
})