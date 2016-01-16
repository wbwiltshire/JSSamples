console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
var i = 1;
console.log(i);
i = i + "";  //oops
console.log(i + 1);  //treats as a string
console.log(i - 1);  //treats as a number
var k = "1";
k++;                 //treats as a number
console.log(k);  
k = "1";
k += 1;              //treats as a string
console.log(k);
