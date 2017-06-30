const express = require('express');

const departmentsRouter = express.Router();

departmentsRouter.get('/departments', function(req, res) {
    res.send('Departments page');
});


module.exports = departmentsRouter;