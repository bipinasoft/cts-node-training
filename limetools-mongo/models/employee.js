const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    emp_no: Number,
    first_name: String,
    last_name: String
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

module.exports = EmployeeModel;