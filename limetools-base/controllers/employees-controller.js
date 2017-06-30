function getEmployees (req, res) {
    res.send('Employees page');
}

function getEmployeeById(req, res) {
    res.send('Employee details page')
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