function findContact(c, id)
{
  var contact = null;
  console.log('length: ' + c.length);
  for (var cnt in c)
  {
  	console.log('Id: ' + c[cnt].Id);
    if (c[cnt].Id === id)
    {
    	contact = c[cnt];
      break;
    }
  }
	return contact;
};

var contacts = [{ Id: 0, Name: "Warren", Age: 53}, {Id: 1, Name: "Lynn", Age: 55 }, {Id: 2, Name: "Beth, Age: 52" }];
var contact = findContact(contacts,1);
console.log('Name: ' + contact.Name);