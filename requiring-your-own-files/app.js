console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();


fs.appendFile('greeting.txt', `Hello ${user.username}! 2 + 3 is ${notes.add(2,3)}.`, (err) => {
	if(err){
		console.log('Error happend!');
	}
});
