const express = require('express');
const app = express();
const port = 3000;

const sounds = {
    pig: 'Oink!',
    cow: 'Moo!',
    dog: 'Woof Woof!',
};

app.get('/', (req, res) => {
    res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', (req, res) => {
    const animal = req.params.animal;
    const animalSound = sounds[animal];
    res.send(animalSound);
});

app.get('/repeat/:string/:number', (req, res) => {
    const string = req.params.string;
    const number = parseInt(req.params.number);
    const wrongNumber = req.params.number;
    let sendString = '';

    console.log(typeof number)

    if (number) {
        for (let i = 0; i < number; i++) {
            sendString += string + ' ';
        }
        res.send(sendString);
    } else {
        res.send(`"${wrongNumber}" is not a number`);
    }
});

app.get('*', (req, res) => {
    res.send('Sory, page not found... What are you doing with your life?');
});

app.listen(port, () => {
    console.log('Server has started on port 3000');
});