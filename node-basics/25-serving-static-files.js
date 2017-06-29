var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/templates/index.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/templates/contact.html');
});

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/templates/404.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});