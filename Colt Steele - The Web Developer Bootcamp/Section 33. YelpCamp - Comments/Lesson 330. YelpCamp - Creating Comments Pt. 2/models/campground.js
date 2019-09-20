const mongoose = require('mongoose');

const campgroundSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }
    ]
});

const Campground = mongoose.model('CampGround', campgroundSchema);

module.exports = Campground;