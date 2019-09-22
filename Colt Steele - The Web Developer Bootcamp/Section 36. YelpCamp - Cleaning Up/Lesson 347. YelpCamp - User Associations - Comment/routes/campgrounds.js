const Campground = require('../models/campground');
const express = require('express');
const router = express.Router();

// INDEX - show all campgrounds
router.get('/', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err) return console.error(err);
        res.render('campgrounds/index', {
            campgrounds: campgrounds,
        });
    })

});

router.get('/new', (req, res) => {
    res.render('campgrounds/new');
});

// CREATE - add new campground to DB
router.post('/', (req, res) => {
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
router.get('/:id', (req, res) => {

    const id = req.params.id;

    Campground.findById(id)
        .populate('comments')
        .exec((err, campground) => {
            if (err) return console.error(err);
            res.render('campgrounds/show', { campground: campground });
        });
});

module.exports = router;