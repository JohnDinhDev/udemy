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

const notesDivEl = document.querySelector('#notes');

const filters = {
    searchText: '',
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter( note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    notesDivEl.innerHTML = '';

    filteredNotes.forEach( note => {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        notesDivEl.appendChild(noteEl);
    })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', e => {
    e.target.textContent = 'Hello World';
});

document.querySelector('#remove-all').addEventListener('click', e => {
    document.querySelectorAll('.note').forEach(note => {
        note.remove();
    });
});

document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});