var express = require('express');

var apiRouter = express.Router();
var apiController = require('../controllers/api-controller');

apiRouter.get('/github', apiController.callGithubApi);

apiRouter.get('/api/employees', apiController.getEmployees);
apiRouter.get('/api/employees/:id', apiController.getEmployeeById);
apiRouter.post('/api/employees', apiController.createEmployee);
apiRouter.put('/api/employees/:id', apiController.updateEmployee);
apiRouter.delete('/api/employees/:id', apiController.deleteEmployee);

module.exports = apiRouter;