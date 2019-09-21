const passportLocalMongoose = require('passport-local-mongoose');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/auth_demo_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(require('express-session')({
    secret: 'Send me some pies please 4454',
    resave: false,
    saveUninitialized: false,
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

//=================
// ROUTES
//=================

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/secret', (req, res) => {
    res.render('secret');
});

// Auth Routes
app.get('/register', (req, res) => {
    res.render('register', { errorMessage: false });
});

app.post('/register', (req, res) => {
    req.body.username
    req.body.password
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            res.render('register', { errorMessage: err.message });
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secret');
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});