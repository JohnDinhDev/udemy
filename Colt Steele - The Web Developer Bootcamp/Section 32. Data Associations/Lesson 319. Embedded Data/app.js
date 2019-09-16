const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// POST - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const Post = mongoose.model('Post', postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema],
});

const User = mongoose.model('User', userSchema);

// User.findOne({name: 'Emma Watson'}, (err, user) => {
//     if (err) console.error(err);
//     user.posts.push({
//         title: '3 Things I really hate',
//         content: 'Voldemort. Voldemort. Voldemort',
//     });
//     user.save((err, user) => {
//         if (err) return console.error(err);
//         console.log(user);
//     })
// });