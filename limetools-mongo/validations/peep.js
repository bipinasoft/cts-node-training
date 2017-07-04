var Joi = require('joi');

var PeepValidationSchema = Joi.object().keys({
    emp_no: Joi.number().integer().required().label('Emp No'),
    first_name: Joi.string().min(2).max(100).required().label('First Name'),
    last_name: Joi.string().min(2).max(100).required().label('Last Name')
});

module.exports = PeepValidationSchema;