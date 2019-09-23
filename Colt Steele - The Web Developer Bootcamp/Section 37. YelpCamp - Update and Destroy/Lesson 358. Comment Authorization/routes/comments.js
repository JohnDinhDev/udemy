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
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
            comment.save();
            if (err) return console.error(err);
            campground.comments.push(comment);
            campground.save();
            res.redirect(`/campgrounds/${campground._id}`);
        })
    });
});

router.get('/:comment_id/edit', checkCommentOwnership, (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        if (err) {
            res.redirect('back');
        } else {
            res.render('comments/edit', { campground_id: req.params.id, comment: foundComment });
        }
    })
});

router.put('/:comment_id/', checkCommentOwnership, (req, res) => {

    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, updatedComment) => {
        if (err) return res.redirect('back');
        res.redirect(`/campgrounds/${req.params.id}`)
    })
})

router.delete('/:comment_id', checkCommentOwnership, (req, res) => {
    Comment.findByIdAndDelete(req.params.comment_id, (err) => {
        if (err) return res.redirect('back');
        res.redirect(`/campgrounds/${req.params.id}`);
    });
});

function checkCommentOwnership(req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if (err) return res.redirect('back');
            if (foundComment.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect('back');
            }
        })
    } else {
        res.redirect('back');
    }
}

module.exports = router;