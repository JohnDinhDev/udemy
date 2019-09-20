const Campground = require('./models/campground');
const Comment = require('./models/comment');
const mongoose = require('mongoose');
const express = require('express');
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
        res.render('campgrounds/index', {
            campgrounds: campgrounds
        });
    })

});

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
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
            res.render('campgrounds/show', { campground: campground });
        });
});

// ===============================================
// COMMENTS ROUTES
// ===============================================

app.get('/campgrounds/:id/comments/new', (req, res) => {
    // find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        if (err) return console.error(err);
        res.render('comments/new', { campground: campground });
    });
});

app.post('/campgrounds/:id/comments', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err) return console.error(err);
        Comment.create(req.body.comment, (err, comment) => {
            if (err) return console.error(err);
            campground.comments.push(comment);
            campground.save();
            res.redirect(`/campgrounds/${campground._id}`);
        })
    });
});

app.listen(port, () => {
    console.log(`YelpCamp server has started on port ${port}`);
})