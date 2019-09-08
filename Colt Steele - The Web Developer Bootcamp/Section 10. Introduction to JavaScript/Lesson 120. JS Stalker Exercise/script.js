const bodyEl = document.querySelector('body');

let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?')
let age = prompt('How old are you?');

function appendInfo(firstName, lastName, age) {
    let h1Name = document.createElement('h1');
    let h2Name = document.createElement('h2');
    h1Name.textContent = `Your name is ${firstName} ${lastName}.`;
    h2Name.textContent = `You are ${age} years old.`;
    bodyEl.appendChild(h1Name);
    bodyEl.appendChild(h2Name);
}

appendInfo(firstName, lastName, age);