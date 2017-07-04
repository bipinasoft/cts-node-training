var EmployeeModel = require('../models/employee');
var Joi = require('joi');
var EmployeeValidationSchema = require('../validations/employee');
var formatJoiValidationErrors = require('../validations/format');

function getEmployees (req, res) {

    //Sample to filter : EmployeeModel.find({first_name: 'Angel', last_name: 'Gutmann'})
    EmployeeModel.find({}).then(function(result) {
        res.render('employees/list', { employees: result });
    }).catch(function(err) {
        console.log('Error ');
        res.send('Error occured');
    });

}

function getEmployeeById(req, res) {
    const employeeId = req.params.id;

    EmployeeModel.findById(employeeId).then(function(result) {
        console.log(result);
        var successMessage = req.flash('creationSuccess');
        res.render('employees/details', { employee: result , successMessage: successMessage });
    }).catch(function(err) {
        console.log('Error in fetching employee');
        res.send('Error occured');
    });


}

function showCreateForm(req, res) {
    console.log('Show create form');
    var errors = req.flash('creationError');
    res.render('employees/create', { errors: errors });
}

function createEmployee(req, res) {
    console.log('Body : ', req.body);
    
    var result = Joi.validate(req.body, EmployeeValidationSchema, { abortEarly: false });
    if (result.error) {
        var creationErrors = formatJoiValidationErrors(result.error);
        req.flash('creationError', creationErrors);
        res.redirect('/employees/create');
        return;
    }
    var employee = new EmployeeModel(req.body);
    employee.save().then(function(result) {
        req.flash('creationSuccess', 'Employee Created Successfully');
        res.redirect('/employees/' + result.id);
    }).catch(function(err) {
        res.render('employees/create');
    });
}

function showEditForm(req, res) {
    var employeeId = req.params.id;
    EmployeeModel.findById(employeeId).then(function(result) {
        res.render('employees/edit', { employee: result });
    }).catch(function(err) {
        res.send('Error in showing editing form');
    });
    
}

function updateEmployee(req, res) {
    var employeeId = req.params.id;
    var employeeBody = req.body;

    EmployeeModel.findByIdAndUpdate(employeeId, employeeBody).then(function() {
        res.redirect('/employees/'+ employeeId);
    }).catch(function(err) {
        res.send('Error deleting employee');
    });
    
}

function showDeleteConfirmation(req, res) {
    var employeeId = req.params.id;
    res.render('employees/delete', { employeeId: employeeId });
}

function deleteEmployee(req, res) {
    var employeeId = req.params.id;
    console.log('Delete Employee');
    EmployeeModel.findByIdAndRemove(employeeId).then(function() {
        res.redirect('/employees');
    }).catch(function(err) {
        res.send('Could not delete employee');
    });
}

module.exports = {
    getEmployees: getEmployees,
    getEmployeeById: getEmployeeById,

    showCreateForm: showCreateForm,
    createEmployee: createEmployee,

    showDeleteConfirmation: showDeleteConfirmation,
    deleteEmployee: deleteEmployee,

    showEditForm: showEditForm,
    updateEmployee: updateEmployee,
};