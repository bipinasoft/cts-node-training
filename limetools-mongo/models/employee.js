var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    emp_no: Number,
    first_name: String,
    last_name: String
});

var EmployeeModel = mongoose.model('Employee', EmployeeSchema);

module.exports = EmployeeModel;