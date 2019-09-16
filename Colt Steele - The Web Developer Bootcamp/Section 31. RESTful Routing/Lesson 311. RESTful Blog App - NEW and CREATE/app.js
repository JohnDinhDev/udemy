const express = require('express'),
mongoose      = require('mongoose'),
app           = express(),
port          = 3000;

// APP CONFIG
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// MONGOOSE/MODEL CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true, useUnifiedTopology: true});
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now},
});

const Blog = mongoose.model('Blog', blogSchema);

// RESTFUL ROUTES

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) return console.error(err);
        res.render('index', {blogs: blogs});
    });
});

app.get('/blogs/new', (req, res) => {
    res.render('new');
});

app.post('/blogs', (req, res) => {
    Blog.create(req.body.blog, (err, newBlog) => {
        if (err) return console.error(err);
        res.redirect('/blogs');
    })
});

app.listen(port, () => {
    console.log(`App has started on port ${port}.`);
});