const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.render('create');
});

app.post('/create', function(req, res) {
    const employee = req.body;
    console.log(employee);

    res.render('created', { employee: employee });
});


app.listen(3000);