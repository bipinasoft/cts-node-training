var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var morgan = require('morgan');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

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
app.use(morgan('dev'));

// setting up flash and session
app.use(cookieParser());
app.use(session({
    secret: 'mycrazysecretwebapp',
    cookie: {
        maxAge: 30000
    },
    saveUninitialized: false,
    resave: false
}));
app.use(flash());


// setting up auth using passport
const passport = require('./middlewares/passport-auth');
app.use(passport.initialize());
app.use(passport.session());

var demoMiddleware = require('./middlewares/demo');
app.use(demoMiddleware);

// our own middleware
app.use(function(req, res, next) {
    res.locals.loggedInUser = req.user;
    console.log('my own middleware');
    next();
});

//setting up routes
require('./routes')(app);

app.listen(PORT_NO, function() {
    console.log('Server listening on port no ')
});