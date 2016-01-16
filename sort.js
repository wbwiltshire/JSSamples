//sort functionality
function sortMe(arr) {
	//determine which sort to call base on type
	if (typeof(arr[0]) === typeof(0)) {
		 return arr.sort(function(a,b) {
			return a-b;});
	}
	else {
		return arr.sort();
	}	
};

var numArray = [40, 100, 1, 5, 25];
var alphaArray = [ "GE", "VZ",  "MSFT", "AAPL" ];
console.log(numArray.sort());
console.log(sortMe(numArray));
console.log(alphaArray.sort());
console.log(sortMe(alphaArray));


