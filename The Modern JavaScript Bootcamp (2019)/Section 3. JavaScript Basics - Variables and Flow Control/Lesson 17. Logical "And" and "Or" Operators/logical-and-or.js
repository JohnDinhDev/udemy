//=========================================================================================
//     Challenge
//=========================================================================================

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Write if statement for
// Are borth vegan? Only offer vegan dishes
// At least one vegan? Make sure to offer some vegan dishes
// Else, offer anything

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("You get vegan dishes only");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("I will offer you some vegan dishes");
} else {
    console.log("Here's the whole menu");
}