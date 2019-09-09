const bodyEl = document.querySelector('body');

function appendAnswer(string) {
    const pEl = document.createElement('p');
    pEl.textContent = string;
    bodyEl.appendChild(pEl);
} 

function problemOne() {
    let string = '1. '
    for(let i = -10; i <= 19; i++) {
        string += i + ' '
    }
    return string;
}

function problemTwo() {
    let string = '2. ';
    for (let i = 10; i <= 40; i++) {
        if (i % 2 === 0) {
            string += i + ' ';
        }
    }
    return string;
}

function problemThree() {
    let string = '3. ';
    for (let i = 300; i <= 333; i++) {
        if (i % 2 !== 0) {
            string += i + ' ';
        }
    }
    return string;
}

function problemFour() {
    let string = '4. ';
    for (let i = 5; i <= 50; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            string += i + ' ';
        }
    }
    return string;
}

appendAnswer(problemOne());
appendAnswer(problemTwo());
appendAnswer(problemThree());
appendAnswer(problemFour());