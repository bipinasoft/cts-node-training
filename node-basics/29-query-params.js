const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/employees', function(req, res) {
    let arrayOfEmployees = [
        {
            id: 123,
            first_name: 'Rock Dwayne',
            last_name: 'Johnson',
            city: 'Los Angeles',
            hobbies: ["Internet", "Music", "Fitness Model"]
        },
        {
            id: 124,
            first_name: 'Deepika',
            last_name: 'Padukone',
            city: 'Los Angeles',
            hobbies: ["Internet", "Music", "Fitness Model"]
        },
        {
            id: 126,
            first_name: 'Alexandra',
            last_name: 'Daddario',
            city: 'Paris',
            hobbies: ["Internet", "Music", "Fitness Model"]
        }
    ];
    const filter = req.query;
    console.log(req.query);
    console.log(filter.dept);
    console.log(filter.city);
    res.render('employees', { employees: arrayOfEmployees });
});

app.listen(process.env.PORT || 3000);