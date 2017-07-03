var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'limetools'
});
 
connection.connect();
 
connection.query('CALL sp_getemployees()',function(err,rows){
  if (err) throw err;

  console.log('Data received from Db:\n');
    console.log(rows);
    for (var i = 0; i < rows[0].length; i++) {
        console.log(rows[0][i].id, rows[0][i].emp_no, rows[0][i].first_name, 
                rows[0][i].last_name);
    };
});

connection.end();