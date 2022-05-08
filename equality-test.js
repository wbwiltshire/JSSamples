//
//strange equalities
(function() {
	let test1 = 0 == "";             //should be false, but isn't
	let test2 = 0 == "0";            //should be false, but isn't
	let test3 = 0 == "\t\r\n";       //should be false, but isn't
	let test4 = 0 == false;          //should be true and is
	let test5 = null ==  undefined;  //should be false and isn't
	let test6 = "" != "0";			 //should be true and is 
	let test7 = false != "false";    //should be true and is
	let test8 = false != undefined;  //should be true and is
	let test9 = false != null;       //should be true and is
	let value = null;
	console.log('test1 (0 == "") is ' + test1);
	console.log('test2 (0 == "0") is ' + test2);
	console.log('test3 (0 == \"\\t\\r\\n") is ' + test3);
	console.log('test4 (0 == false) is ' + test4);
	console.log('test5 (null == undefined) is ' + test5);	
	console.log('test6 (\"\" != "0") is ' + test6);
	console.log('test7 (false != "false") is ' + test7);
	console.log('test8 (false != undefined) is ' + test8);
	console.log('test9 (false != null) is ' + test9);
})();

//expected equalities
