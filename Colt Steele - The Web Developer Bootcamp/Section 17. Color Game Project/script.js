const rgbNumbersEl = document.querySelector('.rgb-numbers');
const squaresEl = document.querySelectorAll('.square');
const messageEl = document.querySelector('.message');
const headerEl = document.querySelector('.heading')
const newGameBtn = document.querySelector('#new-game');

let difficultyNumber = 6;
let colorData = setColorData();
let colorAnswer = generateAnswer();
let winningWords = [
    'Nice Job!',
    'Fantastic!',
    'You\'re awesome!',
    'Great!'
]
let gameState = false;


function generateRandomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//function to pick random answer
function generateAnswer() {
    const randomAnswer = Math.floor(Math.random() * colorData.length);
    return colorData[randomAnswer];
}

// Sets colorData data
function setColorData() {
    let arr = [];
    for (let i = 0; i < difficultyNumber; i++) {
        arr.push(generateRandomRGB());
    }
    return arr;
}

function init() {
    colorData = setColorData();
    // Init colors onto squares
    for (let i = 0; i < difficultyNumber; i++) {
        squaresEl[i].style.backgroundColor = colorData[i];
    }
    colorAnswer = generateAnswer();

    rgbNumbersEl.textContent = colorAnswer.toUpperCase();
}

function randomWinningWord() {
   let index = Math.floor(Math.random() * winningWords.length);
   return winningWords[index];
}

// event listener for squares
squaresEl.forEach(square => {
    square.addEventListener('click', e => {
        if (square.style.backgroundColor === colorAnswer && !gameState) {
            gameState = !gameState;
            for (let square of squaresEl) {
                square.style.backgroundColor = colorAnswer;
            }
            headerEl.style.backgroundColor = colorAnswer;
            messageEl.textContent = randomWinningWord();
        } else if (!gameState) {
            square.style.backgroundColor = '#201F20';
        }
    });
});

newGameBtn.addEventListener('click', e => {
    headerEl.backgroundColor = 'rgb(138, 157, 218)';
    messageEl.textContent = '';
    gameState = !gameState;
    init();
})

init();
