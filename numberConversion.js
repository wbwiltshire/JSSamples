function safeNumberConversion(n) {
  //convert to number, base 10
  return parseInt(n, 10);
};
function unsafeNumberConversion(n) {
  return parseInt(n);
};
function octalNumberConversion(n) {
return parseInt(n, 8);
};

var one = "1";
var ten = "010";

var safe = safeNumberConversion(ten);
var unsafe = unsafeNumberConversion(ten);
var oct = octalNumberConversion(ten);

console.log("safe: " + safe);
console.log(typeof(safe));
console.log(typeof(one));
console.log("unsafe: " + unsafe);
console.log(typeof(unsafe));
console.log("octal: " + oct);