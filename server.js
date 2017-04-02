var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

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

app.post('/todos', function(req, res) {
	var body = req.body;
	body.id = todoNextId++;
	todos.push(body);
	res.json(todos);
});

app.listen(PORT, function() {
	console.log('Express listening to port ' + PORT + '!');
});