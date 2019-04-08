const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Japan',
}, {
    title: 'Habbits to work on',
    body: 'Excercise, eating a bit better',
}, {
    title: 'Office modifications',
    body: 'Get a new gaming chair',
},];

document.querySelector('#create-note').addEventListener('click', e => {
    e.target.textContent = 'Hello World';
});

document.querySelector('#remove-all').addEventListener('click', e => {
    document.querySelectorAll('.note').forEach(note => {
        note.remove();
    });
});

document.querySelector('#search-text').addEventListener('input', e => {
    console.log(e.target.value);
})