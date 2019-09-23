const Campground = require('../models/campground');
const Comment = require('../models/comment');

// all the middleware goes here
const middlewareObj = {};

middlewareObj.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', "Please Login First");
    res.redirect('/login');
}

middlewareObj.checkCampgroundOwnership = function (req, res, next) {
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

middlewareObj.checkCommentOwnership = function (req, res, next) {
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
module.exports = middlewareObj;