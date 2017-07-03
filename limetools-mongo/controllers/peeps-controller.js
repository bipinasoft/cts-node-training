var mysqlPool = require('../config/mysql');

function getPeeps (req, res) {
    mysqlPool.query('SELECT * from employees', function(err, result) {
        if (err) 
            res.send('Error fetching employees');
        res.render('employees/list', { employees: result });
    });
    
}

module.exports = {
    getPeeps: getPeeps
}