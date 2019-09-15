const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost/yelp_camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const campgroundSchema = new mongoose.Schema({
    name: String,
    img: String,
});

const Campground = mongoose.model('CampGround', campgroundSchema);

// Campground.create({
//     name: 'Granite Hill',
//     img: 'https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c73277fd79045c55c_340.jpg'
// }, (err, campground) => {
//     if (err) return console.error(err);
//     console.log('Newly Created Campground:   ')
//     console.log(campground);
// });

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


app.listen(port, () => {
    console.log(`YelpCamp server has started on port ${port}`);
})