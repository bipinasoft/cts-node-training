var express = require('express');

var app = express();

app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/templates/ng-demo.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});