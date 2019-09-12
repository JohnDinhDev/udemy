const scores = [90, 98, 89, 100, 100, 86, 94];
const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(scoresArr) {
    let sumOfScores = 0;
    let average;
    for (let score of scoresArr) {
        sumOfScores += score;
    }
    average = Math.ceil(sumOfScores/scoresArr.length);
    return average;
}

console.log(average(scores));
console.log(average(scores2));