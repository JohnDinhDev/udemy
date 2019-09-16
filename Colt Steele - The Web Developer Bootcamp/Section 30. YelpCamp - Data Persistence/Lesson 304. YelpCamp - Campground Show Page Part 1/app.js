const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const campgroundSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
});

const Campground = mongoose.model('CampGround', campgroundSchema);

Campground.create({
    name: 'Stary Skies Rest',
    img: 'https://images.unsplash.com/photo-1531097517181-3de20fd3f05c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    description: 'This is a campsite with a stary sky',
}, (err, campground) => {
    if (err) return console.error(err);
    console.log('Newly Created Campground:   ')
    console.log(campground);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err) return console.error(err);
            res.render('campgrounds', {
                campgrounds: campgrounds
            });
    })

});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.post('/campgrounds', (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = new Campground({
        name: name,
        img: image
    });
    newCampground.save((err, campground) => {
        if (err) return console.error(err);
        console.log(`${campground.name} has been saved`);
        res.redirect('campgrounds');
    });
});

app.get('/campgrounds/:id', (req, res) => {
    res.send('This will be the show page one day!');
});


app.listen(port, () => {
    console.log(`YelpCamp server has started on port ${port}`);
})