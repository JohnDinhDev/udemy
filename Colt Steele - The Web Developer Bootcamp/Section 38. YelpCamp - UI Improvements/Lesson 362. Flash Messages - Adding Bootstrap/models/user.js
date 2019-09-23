const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: String,
    password: String,
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;
