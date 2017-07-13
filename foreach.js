//foreach in javascript is weird.  
var channel = '1127';
var chars = channel.split('');

//Standard foreach, doesn't really work the way you'd think (it's an index, really)
if (channel != null) {
  for (idx in chars)
  {
    console.log(chars[idx]);
  }
};

console.log();
//Alternative, more inuitive way
for (char of chars) {
    console.log(char);
};

console.log();
//Finally, as a function
chars.forEach(function(char) {
	console.log(char);
});