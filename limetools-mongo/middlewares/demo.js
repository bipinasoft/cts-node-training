function demoMiddleware(req, res, next) {
    console.log('My logging mechanism : ', req.url);
    next();
}

module.exports = demoMiddleware;