var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
	res.render('index', {
		characters: [
			{id: 1, name: "Vaan", job: null},
			{id: 2, name: "Penelo", job: null},
			{id: 3, name: "Bash", job: null},
			{id: 4, name: "Fran", job: null},
			{id: 5, name: "Ashe", job: null},
			{id: 6, name: "Balthier", job: null},
		]
	});
});

app.get('/shuffle', function(req, res) {

}) 

app.listen(3000, function () {
	console.log('ready on port 3000');
});