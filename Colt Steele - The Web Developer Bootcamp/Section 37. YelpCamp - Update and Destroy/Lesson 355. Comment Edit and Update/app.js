const methodOverride = require('method-override');
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

const campgroundRoutes = require('./routes/campgrounds');
const commentRoutes = require('./routes/comments');
const indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost:27017/yelp_camp', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// seedDB();


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

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);
app.use(indexRoutes);


app.listen(port, () => {
    console.log(`YelpCamp server has started on port ${port}`);
})