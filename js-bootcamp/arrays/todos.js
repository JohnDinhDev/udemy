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


const removeTodo = function(todos, text) {
    const index = todos.findIndex( todo => {
        return todo.text.toLowerCase() === text.toLowerCase();
    });

    if (index !== -1) {
        todos.splice(index, 1);
    }
};

const getThingsToDo = function (todos) {
    return todos.filter(todo => !todo.completed);
}

console.log(getThingsToDo(todos));

const sortTodos = function (todos) {
    todos.sort( (a, b) => {
        if (a.completed < b.completed) {
            return -1;
        } else if (a.completed > b.completed) {
            return 1;
        } else {
            return 0;
        }
    })
}

sortTodos(todos);
console.log(todos);