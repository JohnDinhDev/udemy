const mongoose = require('mongoose');

const campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    img: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        username: String,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }
    ]
});

const Campground = mongoose.model('CampGround', campgroundSchema);

module.exports = Campground;