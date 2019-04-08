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

const sortNotes = function (notes) {
    notes.sort( (a, b) => {
        const aLower = a.title.toLowerCase();
        const bLower = b.title.toLowerCase();

        if (aLower < bLower) {
            return -1;
        } else if (aLower > bLower) {
            return 1;
        } else {
            return 0;
        }
    });
}

const findNote = function (notes, noteTitle) {
    return notes.find( (note, index) => {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
}

const findNotes = function (notes, query) {
    return notes.filter((note, index) => {
        const isTitleMatch = note
            .title
            .toLowerCase()
            .includes(query.toLowerCase());

        const isBodyMatch = note
            .body
            .toLowerCase()
            .includes(query.toLowerCase());

        return isTitleMatch || isBodyMatch;
    });
}
sortNotes(notes);
console.log(notes);