// Arrow (lambda) functions 
// Link: https://javascript.info/arrow-functions-basics

const searchArray = ['First','Second','Third'];
console.log('found: ', searchArray.find((item) => item == 'Second' ));

let a = 3;
let b = 5;
let n = 9;

let add = (a, b) =>  a + b ;
console.log('a + b =', add(a, b));

let squared = n => n * n;
console.log('squared(n) =', squared(n));

// multi-line arrow function
let isSumNegative = (a, b) => {
    let sum = a + b;
    return sum < 0 ? true : false;
};

console.log('Is sum negative?', isSumNegative(a, b));
