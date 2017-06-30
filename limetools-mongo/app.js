const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('./public'));

const config = require('./config/config.json')[app.get('env')];
mongoose.connect(config.MONGODB_URI);
mongoose.Promise = global.Promise;

const PORT_NO = process.env.PORT || 3000;

//setting up routes
require('./routes')(app);

app.listen(PORT_NO, function() {
    console.log('Server listening on port no ')
});