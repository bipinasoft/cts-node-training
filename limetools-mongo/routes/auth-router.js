const express = require('express');
const authController = require('../controllers/auth-controller');

const authRouter = express.Router();
const passport = require('../middlewares/passport-auth');

authRouter.get('/signup', authController.showSignupPage);
authRouter.get('/login', authController.showLoginPage);
authRouter.get('/profile', authController.isLoggedIn, authController.showProfilePage);
authRouter.get('/logout', authController.logoutUser);

authRouter.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

authRouter.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

module.exports = authRouter;