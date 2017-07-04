function showSignupPage(req, res) {
    res.render('auth/signup', { errors: req.flash('signupMessage') });
}   

function showLoginPage(req, res) {
    res.render('auth/login', { errors: req.flash('loginMessage') });
}

function showProfilePage(req, res) {
    res.render('auth/profile', {user: req.user});
}

function logoutUser(req, res) {
    req.logout();
    res.redirect('/');
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
}


module.exports = {
    showSignupPage: showSignupPage,
    showLoginPage: showLoginPage,
    showProfilePage: showProfilePage,
    isLoggedIn: isLoggedIn,

    logoutUser: logoutUser
};