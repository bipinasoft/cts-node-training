var Joi = require('joi');

var EmployeeValidationSchema = Joi.object().keys({
    emp_no: Joi.number().integer().required().label('Emp No'),
    first_name: Joi.string().min(2).max(100).required().label('First Name'),
    last_name: Joi.string().min(2).max(100).required().label('Last Name')
});

module.exports = EmployeeValidationSchema;

// var myEmployee = { emp_no: 123.345, first_name: 'LP Shivan', last_name: 'Shambavan' };
// var result = Joi.validate(myEmployee, EmployeeValidationSchema);

// if(result.error === null)
//     console.log('Valid contents')
// else {
//     console.log('Not Valid');
//     console.log(result.error);
// }
    