//////////////////////////
////// DOM ELEMENTS //////
//////////////////////////

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('#add-todo');
const todoInputEl = document.querySelector('#todo-input');
const todoDivEl = document.querySelector('#todos');
const filterInputEL = document.querySelector('#filter-input');

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
    text: 'Exercise',
    completed: false,
},]

// Array of incompleted todos
let incompleteTodos = todos.filter(todo => {
    return !todo.completed;
});

const filters = {
    searchText: '',
}

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

const renderTodos = function (todos, filters, append) {
    const filteredTodos = todos.filter( todo => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    append.innerHTML = '';

    incompleteTodos = filteredTodos.filter(todo => !todo.completed);
    renderElement('h2', generateSummary(incompleteTodos), append);

    filteredTodos.forEach( todo => {
        renderElement('p', todo.text, append);
    });
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

filterInputEL.addEventListener('input', e => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters, todoDivEl);
});

//////////////////////////
/// INITIAL RENDERING ////
//////////////////////////

renderTodos(todos, filters, todoDivEl);