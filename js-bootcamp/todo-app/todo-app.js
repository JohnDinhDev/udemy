//////////////////////////
////// DOM ELEMENTS //////
//////////////////////////

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('#add-todo');
const todoInputEl = document.querySelector('#todo-input');

//////////////////////////
////////// DATA //////////
//////////////////////////

const todos = [{
    text: 'Order cat food',
    completed: true,
}, {
    text: 'Clean kitchen',
    completed: true,
}, {
    text: 'Buy food',
    completed: false,
}, {
    text: 'Do work',
    completed: true,
}, {
    text: 'Excercise',
    completed: false,
},]

// Array of incompleted todos
const incompleteTodos = todos.filter(todo => {
    return !todo.completed;
});

//////////////////////////
// FUNCTION EXPRESSIONS //
//////////////////////////

const renderElement = function (element, text, append) {
    const el = document.createElement(element);
    el.textContent = text;
    append.appendChild(el);
}

const generateSummary = function (todos) {
    let incompleted = incompleteTodos.length;

    if (incompleted === 1) {
        return `You have ${incompleted} todo left.`;
    } else {
        return `You have ${incompleted} todos left`;
    }
}

//////////////////////////
//// EVENT LISTENERS /////
//////////////////////////

buttonEl.addEventListener('click', e => {
    e.target.textContent = 'Nihowdy';
});

todoInputEl.addEventListener('input', e => {
    console.log(e.target.value);
});

///////////////////////////////////////////////////////////

// Rendering Summary
renderElement('h2', generateSummary(todos), bodyEl);

// Rendering todo text
for (let todo of todos) {
    renderElement('p', todo.text, bodyEl);
}

