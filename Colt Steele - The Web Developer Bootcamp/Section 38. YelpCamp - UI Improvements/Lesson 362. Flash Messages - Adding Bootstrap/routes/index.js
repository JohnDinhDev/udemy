const User = require('../models/user');
const passport = require('passport');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('landing');
});

//===============
// AUTH ROUTES
//===============

router.get('/register', (req, res) => {
    res.render('register');
});


router.post('/register', (req, res) => {
    const newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/campgrounds');
        });
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login',
}), (req, res) => {

});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "Logged you out!");
    res.redirect('/campgrounds');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;