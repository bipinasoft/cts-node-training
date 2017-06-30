const express = require('express');

const employeesRouter = express.Router();

employeesRouter.get('/employees', function(req, res) {
    res.send('Employees page');
});


module.exports = employeesRouter;