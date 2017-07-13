//javascript dates are serialized to ISO 8601 formatted strings by JSON (stringify)
var converted = [];
var now = new Date();
var birthdate = new Date('1960-08-11T08:00:00.000Z');

console.log('Now: ' + now)
var nowStr = JSON.stringify(now);
console.log('Now serialized to JSON: ' + nowStr);

console.log();
console.log('Birth date: ' + birthdate)
var birthdateStr = JSON.stringify(birthdate);
console.log('Birth date serialized to JSON: ' + birthdateStr);

//However, some dates are serialized as milliseconds since Jan. 1, 1970 and stored in a JSON variable 
console.log();
console.log('Dates in milliseconds since epoch:');
var millisecondsDate = new Date('2099-12-31T00:00:00.000Z').getTime();
console.log('2099-12-31T00:00:00.000Z in milliseconds: ' + millisecondsDate);
var dates = { startDate: 1471716000 , endDate: 1471719600 };

//convert integer dates from seconds to milliseconds
var millisecondsDate = new Date('2099-12-31T00:00:00.000Z').getTime();
converted.startDate = new Date(dates.startDate * 1000);
converted.endDate = new Date(dates.endDate * 1000);
console.log();
//print as string
console.log("startDate converted : " + converted.startDate);
console.log("endDate converted : " + converted.endDate);

//convert string dates to milliseconds
console.log();
var saturday = '2016-09-08T17:00:00.000Z';
var sunday = '2016-09-04T22:00:00.000Z';
saturdayMillis = new Date(saturday).getTime();
sundayMillis = new Date(sunday).getTime();
console.log();
console.log("Saturday in milliseconds : " + saturdayMillis + '(' + saturday+')');
console.log("Sunday in milliseconds : " + sundayMillis + '(' + sunday +')');

//Add days
console.log();
var plus14 = 14;
var futureDate = now;
futureDate.setDate(now.getDate() + plus14);
console.log("Two weeks from now is " + futureDate + '(' + JSON.stringify(futureDate) + ')');
