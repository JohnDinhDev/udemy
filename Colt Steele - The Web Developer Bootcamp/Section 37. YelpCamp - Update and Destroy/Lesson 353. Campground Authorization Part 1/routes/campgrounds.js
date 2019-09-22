const Campground = require('../models/campground');
const express = require('express');
const router = express.Router();

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

function checkCampgroundOwnership(req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, (err, foundCampground) => {
            if (err) return res.redirect('back');
            if (foundCampground.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect('back');
            }
        });
    } else {
        res.redirect('back');
    }
}

// INDEX - show all campgrounds
router.get('/', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err) return console.error(err);
        res.render('campgrounds/index', {
            campgrounds: campgrounds,
        });
    })

});

router.get('/new', isLoggedIn, (req, res) => {
    res.render('campgrounds/new');
});

// CREATE - add new campground to DB
router.post('/', isLoggedIn, (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const author = {
        id: req.user._id,
        username: req.user.username,
    };
    const newCampground = new Campground({
        name: name,
        img: image,
        description: description,
        author: author
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

router.get('/:id/edit', checkCampgroundOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        res.render('campgrounds/edit', { campground: foundCampground });
    });
});

router.put('/:id', (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        // if (err) return res.redirect('/campgrounds');
        res.redirect(`/campgrounds/${req.params.id}`);
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete('/:id', (req, res) => {
    Campground.findByIdAndDelete(req.params.id, (err) => {
        if (err) return res.redirect('/campgrounds');
        res.redirect('/campgrounds');
    });
});

module.exports = router;