//=========================================================================================
//     Challenge
//=========================================================================================

// Create a function getTip that calculates how much you need to pay based on tip percent

const getTip = (total, tipPercent = .2) => {
    const percent = tipPercent * 100;
    const tip = total * tipPercent;
    return {
        originalTotal: total,
        percent: percent,
        tip: tip,
        total: tip + total,
    };
}

const total40Tip25 = getTip(40, 0.25);
console.log(`You tipped ${total40Tip25.percent}%.\n${total40Tip25.percent}% of $${total40Tip25.originalTotal} is $${parseFloat(total40Tip25.tip).toFixed(2)}`);
console.log(`Your final total comes to $${total40Tip25.total}`);



