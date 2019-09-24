// This lesson shows us how to declare strings as variables

let firstName = "John";
let lastName = "Dinh";
// let fullName = firstName + " " + lastName;
let fullName = `${firstName} ${lastName}`; // I already know template strings

console.log(fullName); // => John Dinh

//=========================================================================================
//     Challenge
//=========================================================================================

// 1. Create 3 variables (city, country, location)
// 2. location should output "Philadelphia, United States" 
// if city is equal to Philadelphia & country is equal to United States


// I already know constants // You can sub "const" for "let" if you are new to JavaScript
const city = "Philadelphia";
const country = "United States";

const location = `${city}, ${country}`;
console.log("/////////////////////////////////////////////////////////////////")
console.log("///////////////THIS IS THE CHALLENGE SECTION/////////////////////")
console.log("/////////////////////////////////////////////////////////////////\n")

console.log(location); // => Philadelphia, United States