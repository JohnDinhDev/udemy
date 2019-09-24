// This lesson is showing us that we can set number data types to variables

let age = 26
// This shows us we can do basic arithmetic with numbers
let dogYears = (age + 1) / 7;

console.log(dogYears);

//=========================================================================================
//     Challenge
//=========================================================================================

// 1. Create a variables named (studentScore, maxScore, percent)
// studentScore should be set to the number of correctly answered questions on a test
// maxScore should be set to the maximum amount of questions on the test
// percent  should be set to the percentage of the student's score
//
// Note: We are arbitrarily setting these values to the variables

let studentScore = 24;
let maxScore = 26;
// let percent = (studentScore / maxScore) * 100; // this is the expected answer you should of come up with
let percent = parseFloat(findPercent(studentScore, maxScore)).toFixed(2) + "%"; // + "%" adds the % symbol after the calculated percent number
// parseFloat(number value).toFixed(2) rounds to the 100th decimal place

// Ignore this function: this is the same as 
// let percent = (studentScore / maxScore) * 100;
function findPercent(studentScore, maxScore) {
    return (studentScore / maxScore) * 100;
}

console.log("/////////////////////////////////////////////////////////////////")
console.log("///////////////THIS IS THE CHALLENGE SECTION/////////////////////")
console.log("/////////////////////////////////////////////////////////////////\n")

console.log(`This student got ${studentScore} out of ${maxScore} questions correct.`);
console.log(`That is a grade of ${percent}`);