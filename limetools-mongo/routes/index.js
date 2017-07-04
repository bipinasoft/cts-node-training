var employeesRouter = require('./employees-router');
var pagesRouter = require('./pages-router');
var peepsRouter = require('./peeps-router');
var apiRouter = require('./api-router');

module.exports = function(app) {
    app.use(employeesRouter);
    app.use(pagesRouter);
    app.use(peepsRouter);
    app.use(apiRouter);
};
