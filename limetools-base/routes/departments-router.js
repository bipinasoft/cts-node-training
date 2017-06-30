const express = require('express');

const departmentsRouter = express.Router();
const departmentsController = require('../controllers/departments-controller');

departmentsRouter.get('/departments', departmentsController.getDepartments);
departmentsRouter.get('/departments/:id', departmentsController.getDepartmentsById);
departmentsRouter.post('/departments', departmentsController.createDepartment);


module.exports = departmentsRouter;