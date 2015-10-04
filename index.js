var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var pg = require('pg');
var DATABASE_URL = "postgres://mslskdxuhyrwsc:eRZ5hE5yMQBmBaB89w1VjzgfJK@ec2-75-101-162-243.compute-1.amazonaws.com:5432/dbfjgrtpmhgugk?ssl=true";

var pg = require('pg');

pg.connect(DATABASE_URL, function (err, client, done) {
	if (err) {
		return console.error('error fetching client from pool', err);
	}
	// client.query('INSERT into user_table (firstName, lastName, headline) VALUES($1, $2, $3) RETURNING id', 
 //            ['Cece', 'Tsui', 'yo'], function (err, result) {
	// 	done();
	// 	if (err) {
	// 		return console.error('error running query', err);
	// 	}
	// 	console.log("boom");
	// 	console.log(result);
	// });

	client.query('SELECT firstName FROM user_table', function (err, results) {
		done();
		if (err) {
			return console.error('error running query', err);
		}
		console.log("boom");
		console.log(results.rows[0]);
	});
});








app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/join', function(request, response) {
  response.render('pages/join');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.post('/positiondata', function(request, response){
	console.log("success");

	console.log(request.body);

});

app.post('/userdata', function(request, response) {
	console.log(request.body.id);
	console.log(request.body.firstName);
	console.log(request.body.lastName);
	console.log(request.body.photo);
	console.log(request.body.headline);
});



