var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hi There, Welcome to my assignment');
});

app.get('/speak/:animal', function(req, res) {
	var animalNoise = '';
	var animal = req.params.animal; 
	if (animal === 'pig') {
		animalNoise = 'The pig says \'Oink\''; 
	} else if (animal === 'cow') {
		animalNoise = 'The cow says \'Moo\''; 
	} else if (animal === 'dog') {
		animalNoise = 'The dog says \'Woof Woof\''; 
	}
	res.send(animalNoise);
});

app.get('/repeat/:word/:number', function(req, res) {
	debugger;
	var times = Number(req.params.number);
	var word = req.params.word;
	var result = '';
	for (var i = 0; i < times; i++) {
		result += word + ' ';
	}
	res.send(result);
});

app.get('*', function(req, res) {
	res.send('Sorry, page not found... What are you doing with your life');
});


app.listen(3000, function() {
	console.log('Listening on Port 3000');
});