//Libraries in javaScript

//constructor
var myLib = function(name) {
	//locally scoped variables
	this.name = 'default name';
	this.version = '0.0.0';
	
	//Give a default name, if one isn't specified
	if (name)
		this.name = name;
	
	return this;
} 

//libary method setVersion
//return this, so you can chain the function methods;
myLib.prototype.setVersion = function(v) {
	this.version = v;
	return this;
}

//libary method getVersion
myLib.prototype.getVersion = function() {
	return this.version;
}

myLib.prototype.functionOne = function() {
	console.log('functionOne called.');
	this.functionTwo();
	return this;
}

myLib.prototype.functionTwo = function() {
	console.log('functionTwo called.');
	return this;
}

//Create the libary object
var lib = new myLib('test library');
//var lib = new myLib();

//Test accessing property of library
console.log('Begin testing library: ', lib.name)

//Test accessing library method with local variables
console.log('');
var version = '0.9.1';
var libVersion = lib.getVersion();
console.log('Library version: ' + libVersion);
console.log('Local version: ' + version);

//Test chaining library methods together
var newVersion = '1.0.0';
console.log('');
console.log('Setting new library version: ' + newVersion);
libVersion = lib.setVersion(newVersion).getVersion();
console.log('Library version: ' + libVersion);

//Test method calling another method
console.log('');
lib.functionOne();