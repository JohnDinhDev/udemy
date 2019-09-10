const rgbNumbersEl = document.querySelector('.rgb-numbers');
const squaresEl = document.querySelectorAll('.square');

let colorData = setColorData();
let colorAnswer = generateAnswer();



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
    for (let squares of squaresEl) {
        arr.push(generateRandomRGB());
    }
    return arr;
}

function init() {
    // Init colors onto squares
    for (let i = 0; i < 6; i++) {
        squaresEl[i].style.backgroundColor = colorData[i];
    }

    rgbNumbersEl.textContent = colorAnswer.toUpperCase();

}

init();

console.log(colorAnswer)