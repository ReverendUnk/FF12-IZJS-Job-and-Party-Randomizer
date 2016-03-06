var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/shuffle', function(req, res) {

}) 

app.listen(app.get('port'), function () {
	console.log('ready on port 3000');
});