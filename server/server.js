var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	ideasService = require('./../services/ideasService.js');

app.use(express.static('./../client'));

app.get('/', function (request, response) {
	response.sendFile('./../client/index.html');
});

app.get('/ideas', function (request, response) {
	ideasService.getIdeas().then(function (ideas) {
		response.end(JSON.stringify(ideas));
	});
});

app.post('/ideas', function (request, response) {
	var idea = [];

	request.on('data', function (data) {
		idea.push(data);
	}).on('end', function () {
		ideasService.addIdea(JSON.parse(idea)).then(function () {
			response.end();
		});
	});
});

app.listen(port, function () {
	console.log('Server running at port ' + port);
});