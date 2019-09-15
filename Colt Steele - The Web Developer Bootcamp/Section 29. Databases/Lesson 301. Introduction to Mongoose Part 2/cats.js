const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/cat_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, );

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("We're connected!");
    const catSchema = new mongoose.Schema({
        name: String,
        age: Number,
        temperament: String,
    });

    catSchema.methods.speak = function () {
        const greeting = this.name ? `Meow name is ${this.name}` : "I don't have a name";
        console.log(greeting);
    }

    const Cat = mongoose.model('Cat', catSchema);

    // const kurapika = new Cat({
    //     name: 'Kurapika',
    //     age: 11,
    //     temperament: 'Angry',
    // });

    // kurapika.save((err, cat) => {
    //     if (err) return console.error(err);
    //     cat.speak();
    // });

    Cat.find({age: 11}, (err, cats) => {
        if (err) return console.error(err);
        console.log(cats);
    })
});