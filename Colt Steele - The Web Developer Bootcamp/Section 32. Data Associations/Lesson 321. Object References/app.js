const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// POST - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});
const User = mongoose.model('User', userSchema);



// Post.create({
//     title: 'How to cook the best burger part 3',
//     content: 'adsiogfadsioghiwaoehgawehiw'
// }, (err, post) => {
//     if (err) return console.error(err);
//     User.findOne({ email: 'bob@gmail.com' }, (err, foundUser) => {
//         if (err) return console.error(err);
//         foundUser.posts.push(post);
//         foundUser.save((err, data) => {
//             if (err) return console.error(err);
//             console.log(data);
//         })
//     })
// })


// FIND USER
// FIND ALL POSTS FOR THAT USER

// User.findOne({ email: 'bob@gmail.com' }).populate('posts').exec((err, user) => {
//     if (err) return handleError(err);
//     console.log('This user posted %s', user.posts);
// })