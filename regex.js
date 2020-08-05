var str = '';
var regex = '';

// Test for Numeric digit
str='P@ssw0rd';
console.log('Test for numeric digit: ', str);

regex = /\d/;
if (regex.test(str))
	console.log('true');
else
	console.log('false');

str = 'HelloKitty';
console.log();
console.log('Test for numeric digit: ', str);

if (regex.test(str))
	console.log('true');
else
	console.log('false');

// Test for Special character
str = 'HelloKitty!';
regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
console.log();
console.log('Test for special character: ', str);

if (regex.test(str))
	console.log('true');
else
	console.log('false');

str = 'HelloKitty';
console.log();
console.log('Test for special character: ', str);

if (regex.test(str))
	console.log('true');
else
	console.log('false');

// Test for uppercase character
str = 'HelloKitty1!';
regex = /[A-Z]/;
console.log();
console.log('Test for uppercase character: ', str);

if (regex.test(str))
	console.log('true');
else
	console.log('false');

str = 'hellokitty1!';
console.log();
console.log('Test for uppercase character: ', str);

if (regex.test(str))
	console.log('true');
else
	console.log('false');

// Test for lowercase character
str = 'HelloKitty1!';
regex = /[a-z]/;
console.log();
console.log('Test for lowercase character: ', str);

if (regex.test(str))
	console.log('true');
else
	console.log('false');

str = 'HELLOKITTY1!';
console.log();
console.log('Test for lowercase character: ', str);

if (regex.test(str))
	console.log('true');
else
	console.log('false');