var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'limetools'
});
 
connection.connect();
 
connection.query(
  'UPDATE employees SET last_name = ? Where id = ?',
  ["Shivan", 1],
  function (err, result) {
    if (err) throw err;
    
    console.log('Changed ' + result.changedRows + ' rows');
  }
);
 
connection.end();