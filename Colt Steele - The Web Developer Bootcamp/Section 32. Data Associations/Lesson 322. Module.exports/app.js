const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Post = require('./models/post');

const User = require('./models/user');



// Post.create({
//     title: 'How to cook the best burger part 4',
//     content: 'OASUDHFASDA'
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