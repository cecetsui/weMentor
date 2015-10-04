var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/registration', function(request, response) {
  response.render('pages/registration');
});

app.get('/dashboard', function(request, response) {
  response.render('pages/dashboard');
});

app.get('/sampleMentors', function(request, response) {
  response.render('pages/sampleMentors');
});

app.get('/userProfile', function(request, response) {
  response.render('pages/userProfile');
});

app.get('/profileEdit', function(request, response) {
  response.render('pages/profileEdit');
});

app.get('/profileGrid', function(request, response) {
  response.render('pages/profileGrid');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


