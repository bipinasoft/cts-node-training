var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('./public'));

var config = require('./config/config.json')[app.get('env')];
mongoose.connect(config.MONGODB_URI);
mongoose.Promise = global.Promise;

var PORT_NO = process.env.PORT || 3000;


//configuring middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//setting up routes
require('./routes')(app);

app.listen(PORT_NO, function() {
    console.log('Server listening on port no ')
});