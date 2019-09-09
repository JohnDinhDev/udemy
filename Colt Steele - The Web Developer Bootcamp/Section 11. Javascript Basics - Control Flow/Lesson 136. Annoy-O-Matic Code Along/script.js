const bodyEl = document.querySelector('body');

function appendH1() {
    const h1 = document.createElement('h1');
    h1.textContent = "Yay, we finally made it!";
    bodyEl.appendChild(h1);
}

function annoy(input) {
    if (input.toLowerCase().indexOf('yes') > -1 || input.toLowerCase().indexOf('yeah') > -1) {
        appendH1();
    } else {
        annoy(prompt('Are we there yet?'));
    }
}

annoy(prompt('Are we there yet?'));