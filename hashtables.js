// Hash tables
//Create associative array / hash table
var ht = [];

//Initialize
ht['Sheldon'] = { Age: 35, Weight: 160, EMail: 'SCooper@BigBangTheory.Com' };
ht['Hillary'] = { Age: 64, Weight: 250, EMail: 'Hillary@LostEmail.com' };
ht['Barack'] = { Age: 55, Weight: 175, EMail: 'BObama@WhiteHouse.gov' };
ht.Donald = {Age: 65, Weight: 230, EMail: 'DDuck@Disney.com' };

console.log ('Sheldon\'s age is ' + ht['Sheldon'].Age ); 

console.log();
console.log('The contents of the hash table are as follows:');
for (var key in ht)
{
	console.log(key + ': Age=' + ht[key].Age + ', Weight=' + ht[key].Weight + ', EMail=' + ht[key].EMail);
}

console.log();
console.log('The sorted contents of the array are as follows:');
var sht = [ 
	{ Name: 'Sheldon', Age: 35, Weight: 160, EMail: 'SCooper@BigBangTheory.Com' },
	{ Name: 'Hillary', Age: 64, Weight: 250, EMail: 'Hillary@LostEmail.com' },
	{ Name: 'Barack', Age: 55, Weight: 175, EMail: 'BObama@WhiteHouse.gov' },
	{ Name: 'Donald', Age: 65, Weight: 230, EMail: 'DDuck@Disney.com' }
	];
sht = sht.sort(nameSort)
for (var key in sht)
{
	console.log(sht[key].Name + ': Age=' + sht[key].Age + ', Weight=' + sht[key].Weight + ', EMail=' + sht[key].EMail);
}

function nameSort(a, b) {
    if (a.Name < b.Name)
        return -1;
    if (a.Name > b.Name)
        return 1;
    return 0;	
}