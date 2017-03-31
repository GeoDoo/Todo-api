var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Feed the cat',
	completed: true
}];

app.get('/', function(req, res) {
	res.send('Todo API Root');
});

app.get('/todos', function(req, res) {
	res.json(todos);
});

app.get('/todos/:id', function(req, res) {
	var todo = todos.filter(function(todo) {
		return todo.id.toString() === req.params.id;
	});

	if (todo.length === 0) {
		res.status(404).send();
	} else {
		res.json(todo);
	}
});

app.listen(PORT, function() {
	console.log('Express listening to port ' + PORT + '!');
});