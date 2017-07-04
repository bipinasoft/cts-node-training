var request = require('request');
var requestUrl = 'https://api.github.com/users/lps-162';
var EmployeeModel = require('../models/employee');
var Joi = require('joi');
var EmployeeValidationSchema = require('../validations/employee');
var formatJoiValidationErrors = require('../validations/format');

var options = {
  url: requestUrl,
  headers: {
    'User-Agent': 'request'
  }
};

function callGithubApi(req, res) {

    request(options, function (error, response, body) {
        if (error)
            return res.status(500).send({
                message: 'Error happened in public fetch' 
            });

        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.status(200).send(body);
    });
}

function getEmployees(req, res) {
    console.log(req.headers['Content-Type']);
    var providerId = req.headers.provider_identifier;
    console.log(providerId);

    EmployeeModel.find({}).then(function(result) {
        res.status(200).json({ data: result });
    }).catch(function(err) {
        res.status(500).json({ message: 'Error fetching employees' });
    })
}

function getEmployeeById(req, res) {
    var employeeId = req.params.id;

    EmployeeModel.findById(employeeId).then(function(result) {
        res.status(200).json({ data: result });
    }).catch(function(err) {
        res.status(500).json({ message: 'Error fetching employee' });
    });
}

function createEmployee(req, res) {

    var result = Joi.validate(req.body, EmployeeValidationSchema, { abortEarly: false });
    if (result.error) {
        var creationErrors = formatJoiValidationErrors(result.error);
        res.status(500).json({ message: creationErrors });
        return;
    }
    var employee = new EmployeeModel(req.body);
    employee.save().then(function(result) {
        res.status(201).json(result);
    }).catch(function(err) {
        res.status(500).json({ message: 'Error in creating employee' });
    });
}

function updateEmployee(req, res) {
     res.send('http update ');
}

function deleteEmployee(req, res) {
     res.send('http delete');
}

module.exports = {
    getEmployees: getEmployees,
    getEmployeeById: getEmployeeById,
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee,

    callGithubApi: callGithubApi
};