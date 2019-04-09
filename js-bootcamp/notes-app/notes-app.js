//////////
// DATA //
//////////
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

const filters = {
    searchText: '',
}

//////////////////
// DOM ELEMENTS //
//////////////////

const notesDivEl = document.querySelector('#notes');
const createNoteBtn = document.querySelector('#create-note');
const searchTextEl = document.querySelector('#search-text');

//////////////////////////
// FUNCTION EXPRESSIONS //
//////////////////////////

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

/////////////////////
// EVENT LISTENERS //
/////////////////////


createNoteBtn.addEventListener('click', e => {
    e.target.textContent = 'Hello World';
});

searchTextEl.addEventListener('input', e => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

/////////////////////
// INITIAL RENDERS //
/////////////////////

renderNotes(notes, filters);

