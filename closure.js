//An example of a closure
//This is a functino that calls itself, but allows the developer
//keep all the variables and functions local to it
var test = 'World';

(function() {
	var test = 'Hello';
	console.log("I'm a closure");
	console.log('test1:' + test);
})();

function notsafe() {
	//var test = 'Hello';
	test = 'Hello';
	console.log("I'm not safe");
	console.log('test2:' + test);
};

notsafe();
console.log('test3:' + test);