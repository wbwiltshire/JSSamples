// See link: https://code.tutsplus.com/tutorials/ecmascript-6-power-tutorial-class-and-inheritance--cms-24117
// http://http://es6-features.org
// ECMAScript 6 Classes

class Animal {
	constructor(value) {
		this.name = value;
	}
		
	//getter and setters
	set color(value) {
		this._color = value;
	}
	
	get color() {
		return this._color;
	}
	
	
	//methods
	run() {
		console.log(this.name + " is running.");
	}
}
	
var lion = new Animal("Lion");
console.log("Created " + lion.name);
lion.run();
lion.color = "yellow";
console.log("The " + lion.name + " is " + lion.color);
console.log();

class Tiger extends Animal {
	constructor(name) {
		super(name);
		this._legs = 4;
	}
	
	get legs() {
		return _legs;
	}
}

var tiger = new Tiger("Bob");
console.log("Created " + tiger.name);
tiger.run();
tiger.color = "black and yellow";
console.log(tiger.name + " the tiger is " + tiger.color);
