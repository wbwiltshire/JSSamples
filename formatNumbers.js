//Boolean
var j = true;
var jFormatted = Number(j);
console.log('boolean: ', jFormatted);
console.log();

//Localization

//Numbers
var i = '12345.67890';
var iFormatted = Number(i).toLocaleString('en');
console.log('Locale number ', iFormatted);
console.log();

//Currency
i = 12345.67890;
var options = { style: 'currency', currency: 'USD' };
iFormatted = i.toLocaleString('en', options);
console.log('Locale currency ', iFormatted);
console.log();

//Dates
var today = new Date();
var todayFormatted = Number(today);
console.log('Today: ', todayFormatted);
todayFormatted = today.toLocaleDateString('en');
console.log('Today: ', todayFormatted);
options = { weekday: 'long' };
console.log('Today weekday: ', today.toLocaleDateString('en', options));
options = { month: 'long', day: 'numeric', weekday: 'short', year: 'numeric' };
console.log('Today options ', today.toLocaleDateString('en', options));
console.log();

