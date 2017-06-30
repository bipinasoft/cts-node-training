const express = require('express');

const employeesRouter = express.Router();

const employeesController = require('../controllers/employees-controller');

employeesRouter.get('/employees', employeesController.getEmployees);
employeesRouter.get('/employees/:id', employeesController.getEmployeeById);
employeesRouter.post('/employees', employeesController.createEmployee);


module.exports = employeesRouter;