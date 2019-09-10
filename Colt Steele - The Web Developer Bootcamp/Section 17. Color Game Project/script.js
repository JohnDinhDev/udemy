const rgbNumbersEl = document.querySelector('.rgb-numbers');
const squaresEl = document.querySelectorAll('.square');

let colorData = [];

// Init random color data
for (let squares of squaresEl) {
    colorData.push(generateRandomRGB());
}

// Init colors onto squares
for (let i = 0; i < 6; i++) {
    squaresEl[i].style.backgroundColor = colorData[i];
}

function generateRandomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}