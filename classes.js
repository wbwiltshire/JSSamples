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

// list of anonymous objects with a key
let userProfile = {
	1 : {
		firstName: 'Warren',
		middleName: null,
		lastName: 'Wiltshire',
		age: 60,
	},
	2 : {
		firstName: 'James',
		middleName: 'Tiberious',
		lastName: 'Kirk',
		age: 90,
	},
};

// Use of nullable
userProfile[1]?.middleName?.length == undefined ? console.log("User 1 has no middle name") : console.log("User 1 middle name is", userProfile[1].firstName);
userProfile[2]?.firstName == undefined ? console.log("User 2 does not exist") : console.log("User 2 first name is", userProfile[2].firstName);
if (!userProfile[99])
	console.log("User 99 does not exist");   
else
	console.log("User 99 first name: ", userProfile[99]?.firstName == undefined ? 'null' : userProfile[99].firstName);
