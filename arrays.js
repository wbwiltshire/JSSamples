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

console.log ();  
var twoDArray = [[ 1,2,3], [4, 5, 6]]
twoDArray.forEach( function(arr) {
	var total = 0;
	//console.log(parseInt(twoDArray[0,i], 10));
	for (var i in arr) {
		total = total + parseInt(arr[i], 10);
	}
	console.log('total: ' + total);
});

console.log ();  
var twoDStrArray = [[ 'Donald','Captain','Donald'], ['Duck', 'Kirk', 'Trump']]
var idx = 0;
var firstNames = twoDStrArray[0];
var lastNames = twoDStrArray[1];
lastNames.forEach( function(arr) {
	//console.log(idx);
	//console.log(arr);
	console.log(firstNames[idx] + ' ' + arr);
	idx++;
});

console.log ();  
console.log ('Searching....');  
var searchArray = ['First','Second','Third'];
var targetName = 'Second';
var result = '';
searchArray.forEach(function(arr) {
	console.log(arr);
	if (arr === targetName)
		result = arr;
});
console.log('Found: ', result);

console.log();
console.log('Adding elements');
var list = [];
var element = new Object()
element.Name = "Tim";
element.Age = 10;
list.push(element);
element = new Object()
element.Name = "Bob";
element.Age = 20;
list.push(element);
list.forEach( function(arr) {
	console.log('Name:' + arr.Name + ', Age: ' + arr.Age);
});


