function getDepartments(req, res) {
    res.send('Departments page');
}

function getDepartmentsById(req, res) {
    res.send('Department details page')
}

function createDepartment(req, res) {
    res.send('Create Department');
}


module.exports = {
    getDepartments: getDepartments,
    getDepartmentsById: getDepartmentsById,

    createDepartment: createDepartment,
};