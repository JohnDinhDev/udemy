const Campground = require('./models/campground');
const LocalStrategy = require('passport-local');
const Comment = require('./models/comment');
const User = require('./models/user');
const passport = require('passport');
const mongoose = require('mongoose');
const express = require('express');
const seedDB = require('./seeds');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(`${__dirname}/public`));

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

seedDB();

app.set('view engine', 'ejs');

// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: 'I hope I can get a job as a full-stack developer some day',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

//===============
// AUTH ROUTES
//===============

app.get('/register', (req, res) => {
    res.render('register');
});


app.post('/register', (req, res) => {
    const newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/campgrounds');
        })
    })
});

app.listen(port, () => {
    console.log(`YelpCamp server has started on port ${port}`);
})