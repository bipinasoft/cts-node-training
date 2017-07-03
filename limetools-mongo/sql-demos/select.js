var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'limetools'
});
 
connection.connect();
 
connection.query('SELECT * from employees', function (error, employees) {
  if (error) throw error;
  console.log('The solution is: ', employees);
  
  employees.forEach(function(employee) {
      console.log("================")
      console.log(employee.id);
      console.log(employee.emp_no);
      console.log(employee.first_name);
      console.log(employee.last_name);
  });
});
 
connection.end();