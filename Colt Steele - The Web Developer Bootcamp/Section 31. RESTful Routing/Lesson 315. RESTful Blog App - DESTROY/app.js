const methodOverride = require('method-override'),
express              = require('express'),
mongoose             = require('mongoose'),
app                  = express(),
port                 = 3000;

// APP CONFIG
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// MONGOOSE/MODEL CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    });

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

app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) return console.error(err);
        res.render('show', {blog: foundBlog});
    });
});

app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) return console.error(err);
        res.render('edit', {blog: foundBlog});
    });
});

app.put('/blogs/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if (err) return console.error(err);
        res.redirect(`/blogs/${req.params.id}`);
    });
});

app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err) => {
        if (err) console.error(err);
        res.redirect('/blogs');
    });
});

app.listen(port, () => {
    console.log(`App has started on port ${port}.`);
});