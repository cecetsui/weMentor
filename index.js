var express = require('express');
var bodyParser = require('body-parser');
var app = express();


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

