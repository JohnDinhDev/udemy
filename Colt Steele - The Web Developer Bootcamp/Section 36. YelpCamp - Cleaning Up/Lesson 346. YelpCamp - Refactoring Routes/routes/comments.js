const Campground = require('../models/campground');
const Comment = require('../models/comment');
const express = require('express');
const router = express.Router({ mergeParams: true });

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

router.get('/new', isLoggedIn, (req, res) => {
    // find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        if (err) return console.error(err);
        res.render('comments/new', { campground: campground });
    });
});

router.post('/', isLoggedIn, (req, res) => {
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

module.exports = router;