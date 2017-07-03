

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'limetools'
});
 
connection.connect();
 
connection.query(
  'DELETE FROM employees WHERE id = ?',
  [14],
  function (err, result) {
    if (err) throw err;

    console.log('Deleted ' + result.affectedRows + ' rows');
  }
);

connection.end();