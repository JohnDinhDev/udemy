const mongoose = require('mongoose');

const campgroundSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
});

const Campground = mongoose.model('CampGround', campgroundSchema);

module.exports = Campground;