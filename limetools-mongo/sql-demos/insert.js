var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'limetools'
});
 
connection.connect();
 
let newEmployee = { emp_no: 145, first_name: 'Rock Dwayne', last_name: 'Johnson' };

const query = connection.query('INSERT INTO employees SET ?', newEmployee, function(err, results) {
    if (err) throw err;
    console.log('INserted employee : ', newEmployee);
});
 
connection.end();