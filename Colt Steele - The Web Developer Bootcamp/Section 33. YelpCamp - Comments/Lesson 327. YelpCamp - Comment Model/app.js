const Campground = require('./models/campground');
const express = require('express');
const mongoose = require('mongoose');
const seedDB = require('./seeds');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

seedDB();

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

    Campground.findById(id)
        .populate('comments')
        .exec((err, campground) => {
            if (err) return console.error(err);
            res.render('show', { campground: campground });
        });
});


app.listen(port, () => {
    console.log(`YelpCamp server has started on port ${port}`);
})