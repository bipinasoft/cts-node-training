const EmployeeModel = require('../models/employee');

function getEmployees (req, res) {
    //{ employees: employees }
    console.log('Control here');

    EmployeeModel.find({}).then(function(result) {
        console.log(result);
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
        res.render('employees/details', { employee: result });
    }).catch(function(err) {
        console.log('Error ');
        res.send('Error occured');
    });
}

function createEmployee(req, res) {
    res.send('Create Employee');
}

function updateEmployee() {
    res.send('Delete Employee');
}

function deleteEmployee() {
    res.send('Delete Employee');
}

module.exports = {
    getEmployees: getEmployees,
    getEmployeeById: getEmployeeById,

    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
};