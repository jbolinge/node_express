var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes', require('./routes/dishRouter'));
app.use('/promotions', require('./routes/promoRouter'));
app.use('/leadership', require('./routes/leaderRouter'));
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
	console.log(`Server running at http://${hostname}:${port}/`);
});