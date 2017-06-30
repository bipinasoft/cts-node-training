function router(app) {
    app.get('/', function(req, res) {
        res.send('Simple express app with arrow functions');
    });

    app.get('/employees', function(req, res) {
        res.send('List of employees');
    });

}

module.exports = router;