const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/cat_app', {useNewUrlParser: true, useUnifiedTopology: true},);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("We're connected!");
});

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String,
});

const Cat = mongoose.model('Cat', catSchema);

