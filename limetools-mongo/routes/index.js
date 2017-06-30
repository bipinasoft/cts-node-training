const employeesRouter = require('./employees-router');
const departmentsRouter = require('./departments-router');

module.exports = function(app) {
    app.use(employeesRouter);
    app.use(departmentsRouter);
};
