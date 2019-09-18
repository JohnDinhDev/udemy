const Campground = require('./models/campground');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

const data = [
    {
        name: 'Clouds Rest',
        img: 'https://images.unsplash.com/photo-1546811740-23e671faf31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'blah blah blah',
    },
    {
        name: 'Clouds Rest',
        img: 'https://images.unsplash.com/photo-1546811740-23e671faf31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'blah blah blah',
    },
    {
        name: 'Clouds Rest',
        img: 'https://images.unsplash.com/photo-1546811740-23e671faf31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'blah blah blah',
    },
    {
        name: 'Clouds Rest',
        img: 'https://images.unsplash.com/photo-1546811740-23e671faf31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'blah blah blah',
    },
    {
        name: 'Clouds Rest',
        img: 'https://images.unsplash.com/photo-1546811740-23e671faf31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'blah blah blah',
    },
    {
        name: 'Clouds Rest',
        img: 'https://images.unsplash.com/photo-1546811740-23e671faf31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'blah blah blah',
    },
]

function seedDB() {
    // Remove all campgrounds
    Campground.deleteMany({}, err => {
        if (err) return console.log('yikes');
        console.log('Removed All Campgrounds');

        for (let seed of data) {
            Campground.create(seed, (err, camp) => {
                if (err) return console.error(err);
                console.log('added a campground');
                // Create a comment
                Comment.create({
                    text: 'This place is great, but I wish there was internet',
                    author: 'Homer',
                }, (err, comment) => {
                    if (err) return console.error(err);
                    camp.comments.push(comment)
                    camp.save();
                    console.log('Created new comment');
                })
            });
        }
    });

    //add a few campgrounds


}

module.exports = seedDB;
