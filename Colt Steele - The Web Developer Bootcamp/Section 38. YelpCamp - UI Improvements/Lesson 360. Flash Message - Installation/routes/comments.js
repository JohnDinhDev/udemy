const Campground = require('../models/campground');
const Comment = require('../models/comment');
const middleware = require('../middleware');
const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/new', middleware.isLoggedIn, (req, res) => {
    // find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        if (err) return console.error(err);
        res.render('comments/new', { campground: campground });
    });
});

router.post('/', middleware.isLoggedIn, (req, res) => {
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

router.get('/:comment_id/edit', middleware.checkCommentOwnership, (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        if (err) {
            res.redirect('back');
        } else {
            res.render('comments/edit', { campground_id: req.params.id, comment: foundComment });
        }
    })
});

router.put('/:comment_id/', middleware.checkCommentOwnership, (req, res) => {

    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, updatedComment) => {
        if (err) return res.redirect('back');
        res.redirect(`/campgrounds/${req.params.id}`)
    })
})

router.delete('/:comment_id', middleware.checkCommentOwnership, (req, res) => {
    Comment.findByIdAndDelete(req.params.comment_id, (err) => {
        if (err) return res.redirect('back');
        res.redirect(`/campgrounds/${req.params.id}`);
    });
});

module.exports = router;