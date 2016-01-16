// arrays in js are 0 based
var arr = [1,2,3];
var total = 0;
for (var i in arr) {
    total = total + i;
	//console.log(i);
};
console.log (total);  //0 + 0 + 1 + 2 = "0012"

var total = 0;
for (var i in arr) {
    total = total + parseInt(i, 10);
	//console.log(i);
};
console.log (total);  //0 + 1 + 2 = 3

var total = 0;
for (var i in arr) {
    total = total + parseInt(arr[i], 10);
	//console.log(i);
};
console.log (total);  //1 + 2 + 3 = 6