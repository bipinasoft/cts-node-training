var employeesRouter = require('./employees-router');
var pagesRouter = require('./pages-router');

module.exports = function(app) {
    app.use(employeesRouter);
    app.use(pagesRouter);
};
