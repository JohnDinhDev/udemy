//=========================================================================================
//     Challenge
//=========================================================================================

// If age is 7 or under => Print message about child prices
// If age is 65 or older => Print messgae about senior discount

const age = 21;

if (age <= 7) {
    console.log("You are a child. You get 99% off");
} else if ( age >= 65) {
    console.log("You are old. You get 65% off cause you're old as heck");
} else {
    console.log("You pay full price");
}