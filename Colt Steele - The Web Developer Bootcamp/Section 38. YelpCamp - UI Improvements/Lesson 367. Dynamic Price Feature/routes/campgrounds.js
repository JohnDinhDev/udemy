const Campground = require('../models/campground');
const middleware = require('../middleware');
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

router.get('/new', middleware.isLoggedIn, (req, res) => {
    res.render('campgrounds/new');
});

// CREATE - add new campground to DB
router.post('/', middleware.isLoggedIn, (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;
    const author = {
        id: req.user._id,
        username: req.user.username,
    };
    const newCampground = new Campground({
        name: name,
        img: image,
        description: description,
        author: author,
        price: price,
    });
    newCampground.save((err, campground) => {
        if (err) return console.error(err);
        console.log(`${campground.name} has been saved`);
        res.redirect('/campgrounds');
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

// EDIT CAMPGROUND ROUTE

router.get('/:id/edit', middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        res.render('campgrounds/edit', { campground: foundCampground });
    });
});

router.put('/:id', middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        // if (err) return res.redirect('/campgrounds');
        res.redirect(`/campgrounds/${req.params.id}`);
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete('/:id', middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndDelete(req.params.id, (err) => {
        if (err) return res.redirect('/campgrounds');
        res.redirect('/campgrounds');
    });
});

module.exports = router;