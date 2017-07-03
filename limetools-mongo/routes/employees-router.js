const express = require('express');

const employeesRouter = express.Router();

const employeesController = require('../controllers/employees-controller');

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