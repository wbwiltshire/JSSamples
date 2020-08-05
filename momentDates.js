moment = require('./moment.js')

//Javascript dates
console.log('Javascript Locale dates');
var today = new Date();
console.log("\tNumber of ticks - Number(today): " + Number(today))
var todayDateFormatted = ''
var todayTimeFormatted = ''
var todayFormatted = Number(today);

todayDateFormatted = today.toLocaleDateString('en');
console.log("\tToday formatted as Locale date: " + todayDateFormatted)
todayTimeFormatted = today.toLocaleTimeString('en');
console.log("\tToday formatted as Locale time: " + todayTimeFormatted)
console.log("\tToday formatted as Locale both: " + todayDateFormatted + ' ' + todayTimeFormatted)

console.log();
console.log('Javascript UTC dates');
var todayUTC = new Date(Date.UTC(2019, 12, 28, 0, 0, 0));
console.log("\tToday(UTC) date: " + todayUTC.toUTCString('en-EN'));


console.log();
console.log('Moment dates');
var mToday = moment();		//should be local time
console.log("\tToday date: " + mToday.toString());
var mUTCToday = moment.utc();
console.log("\tToday date(UTC): " + mUTCToday.toString());
var dateString = "2019-12-28 00:00:00.000";
var mTodayString = moment(dateString);
console.log("\tString date('2019-12-28 00:00:00.000'): " + mTodayString.toString());
console.log("\tFormatted String date('2019-12-28 00:00:00.000'): " + mTodayString.format('MM/DD/YYYY HH:mm:ss'));
var mTodayUTCString = moment.utc(dateString);
console.log("\tUTC string date('2019-12-28 00:00:00.000'): " + mTodayUTCString.toString());
console.log("\tFormatted UTC String date('2019-12-28 00:00:00.000'): " + mTodayUTCString.format('MM/DD/YYYY HH:mm:ss'));
