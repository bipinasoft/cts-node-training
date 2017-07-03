const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/limetools');

const EmployeeModel = require('./models/employee');

let count = 0;

EmployeeModel.remove({}).then(function() {
    
    for (i=0; i<10; i++) {
        let employeeObj = new EmployeeModel();
        employeeObj.emp_no = faker.random.number();
        employeeObj.first_name = faker.name.firstName();
        employeeObj.last_name = faker.name.lastName();
        employeeObj.save(function(err) {
            if (err)
                throw err;
            count++;
            if (count == 10)
            {
                console.log('All records successfully inserted');
                mongoose.disconnect();
            }
        });
    }
}).catch(function(err) {
    console.log('Error in setting up data');
    mongoose.disconnect();
});





