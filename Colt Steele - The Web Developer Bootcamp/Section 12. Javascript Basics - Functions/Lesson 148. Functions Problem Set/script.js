function isEven(input) {
    if (input % 2 === 0) {
        return true;
    }
    return false;
}

function factorial(input) {
    if (input !== 0) {
        let fact = 1;
        for (let i = input; i > 1; i--) {
            fact *= i;
        }
        return fact;
    }
    return 1;
}

function kebabToSnake(input) {
   return input.replace(/-/g, '_');
}