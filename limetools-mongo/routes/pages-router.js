var express = require('express');

var pagesRouter = express.Router();

pagesRouter.get('/', function(req, res) {
    res.render('pages/home');
});

pagesRouter.get('/about', function(req, res) {
    res.render('pages/about');
});

module.exports = pagesRouter;