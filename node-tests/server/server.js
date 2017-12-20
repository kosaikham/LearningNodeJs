const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo App v1.0.0'
	});
});

app.get('/users', (req, res) => {
	res.send([{
		name: 'sai',
		age: 22
	},{
		name: 'mg',
		age: 23
	},{
		name: 'kham',
		age: 24
	}]);
})

app.listen(3000);
module.exports.app = app;