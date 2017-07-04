var express = require('express');

var employeesRouter = express.Router();

var employeesController = require('../controllers/employees-controller');
var authController = require('../controllers/auth-controller');

employeesRouter.use('/employees', authController.isLoggedIn);

// create related stuffs
employeesRouter.get('/employees/create', employeesController.showCreateForm);
employeesRouter.post('/employees/create', employeesController.createEmployee);

employeesRouter.get('/employees', employeesController.getEmployees);
employeesRouter.get('/employees/:id', employeesController.getEmployeeById);
employeesRouter.post('/employees', employeesController.createEmployee);

employeesRouter.get('/employees/:id/edit', employeesController.showEditForm);
employeesRouter.post('/employees/:id/edit', employeesController.updateEmployee);

employeesRouter.get('/employees/:id/delete', employeesController.showDeleteConfirmation);
employeesRouter.post('/employees/:id/delete', employeesController.deleteEmployee);

module.exports = employeesRouter;