const rgbNumbersEl = document.querySelector('.rgb-numbers');
const squaresEl = document.querySelectorAll('.square');
const messageEl = document.querySelector('.message');
const headerEl = document.querySelector('.heading')
const newGameBtn = document.querySelector('#new-game');
const hardBtn = document.querySelector('#hard-btn');
const easyBtn = document.querySelector('#easy-btn');

let difficultyNumber = 6;
let gameState = false;
let colorData = setColorData();
let colorAnswer = generateAnswer();
let winningWords = [
    'Nice Job!',
    'Fantastic!',
    'You\'re awesome!',
    'Great!'
]

// Creates a random rgb string
function generateRandomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// Sets colorData data
function setColorData() {
    let arr = [];
    for (let i = 0; i < difficultyNumber; i++) {
        arr.push(generateRandomRGB());
    }
    return arr;
}

//function to pick random color answer
function generateAnswer() {
    const randomAnswer = Math.floor(Math.random() * colorData.length);
    return colorData[randomAnswer];
}

// Selects random winning phrase
function randomWinningWord() {
    let index = Math.floor(Math.random() * winningWords.length);
    return winningWords[index];
}


function init() {
    for (let square of squaresEl) {
        square.style.backgroundColor = '#201F20';
    }
    colorData = setColorData();
    // Init colors onto squares
    for (let i = 0; i < difficultyNumber; i++) {
        squaresEl[i].style.backgroundColor = colorData[i];
    }
    colorAnswer = generateAnswer();

    rgbNumbersEl.textContent = colorAnswer.toUpperCase();
}



// event listener for squares
squaresEl.forEach(square => {
    square.addEventListener('click', e => {
        if (square.style.backgroundColor === colorAnswer && !gameState) {
            gameState = true;
            for (let i = 0; i < difficultyNumber; i++) {
                squaresEl[i].style.backgroundColor = colorAnswer;
            }
            headerEl.style.backgroundColor = colorAnswer;
            messageEl.textContent = randomWinningWord();
        } else if (!gameState) {
            square.style.backgroundColor = '#201F20';
        }
    });
});

// event listener for New Game button
newGameBtn.addEventListener('click', e => {
    headerEl.style.backgroundColor = 'rgb(138, 157, 218)';
    messageEl.textContent = '';
    gameState = false;
    init();
});

// Event Listener for "Hard" button
hardBtn.addEventListener('click', e => {
    if (hardBtn.className !== 'active') {
        headerEl.style.backgroundColor = 'rgb(138, 157, 218)';
        difficultyNumber = 6;
        easyBtn.classList.remove('active');
        hardBtn.classList.add('active');
        messageEl.textContent = '';
        gameState = false;
        init();
    }
});

// Event listener for "Easy" button
easyBtn.addEventListener('click', e => {
    if (easyBtn.className !== 'active') {
        headerEl.style.backgroundColor = 'rgb(138, 157, 218)';
        difficultyNumber = 3;
        hardBtn.classList.remove('active');
        easyBtn.classList.add('active');
        messageEl.textContent = '';
        gameState = false;
        init();
    }
});

init();
