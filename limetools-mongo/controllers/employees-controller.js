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
        console.log('Error in fetching employee');
        res.send('Error occured');
    });
}

function showCreateForm(req, res) {
    console.log('Show create form');
    res.render('employees/create');
}

function createEmployee(req, res) {
    console.log('Body : ', req.body);
    var employee = new EmployeeModel(req.body);
    employee.save().then(function(result) {
        res.redirect('/employees/' + result.id);
    }).catch(function(err) {
        res.render('employees/create');
    });
}

function updateEmployee() {
    res.send('Delete Employee');
}

function showDeleteConfirmation(req, res) {
    var employeeId = req.params.id;
    res.render('employees/delete', { employeeId: employeeId });
}

function deleteEmployee() {
    res.send('Delete Employee');
}

module.exports = {
    getEmployees: getEmployees,
    getEmployeeById: getEmployeeById,

    showCreateForm: showCreateForm,

    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee,
    showDeleteConfirmation: showDeleteConfirmation
};