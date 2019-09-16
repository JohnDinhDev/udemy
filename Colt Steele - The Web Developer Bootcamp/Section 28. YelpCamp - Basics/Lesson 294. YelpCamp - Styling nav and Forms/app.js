const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

const data = [{
        name: 'Salmon Creek',
        img: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'
    },
    {
        name: 'Granite Hill',
        img: 'https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c73277fd79045c55c_340.jpg'
    },
    {
        name: 'Mountain Goat\'s Rest',
        img: 'https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c73277fd79045c55c_340.jpg'
    },
    {
        name: 'Yamero Please',
        img: 'https://pixabay.com/get/57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c73277fd79045c55c_340.jpg'
    },
    {
        name: 'Granite Hill',
        img: 'https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c73277fd79045c55c_340.jpg'
    },
    {
        name: 'Salmon Creek',
        img: 'https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_960_720.jpg'
    },
    {
        name: 'Yamero Please',
        img: 'https://pixabay.com/get/57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c73277fd79045c55c_340.jpg'
    },
    {
        name: 'Mountain Goat\'s Rest',
        img: 'https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c73277fd79045c55c_340.jpg'
    },

];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {
        data: data
    });
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.post('/campgrounds', (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {
        name: name,
        img: image
    };
    data.push(newCampground);
    res.redirect('campgrounds');
});

app.listen(port, () => {
    console.log(`YelpCamp server has started on port ${port}`);
})