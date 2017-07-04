const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

passport.use('local-signup', new LocalStrategy({passReqToCallback : true}, function(req, username, password, done) {
    
    UserModel.findOne({ username: username }).then(function(user) {
        if (user)
            return done(null, false, req.flash('signupMessage', 'The username is already taken'));
        else {
            let newUser = new UserModel();
            newUser.username = username;
            newUser.password = password;

            newUser.save().then(function() {
                return done(null, newUser);
            }).catch(function(err) {
                return done(err);
            })
        } // end of else
    }).catch(function(err) {
        return done(err);
    });
        
}));

passport.use('local-login', new LocalStrategy({passReqToCallback : true}, function(req, username, password, done) {
    UserModel.findOne({ username: username }).then(function(user) {
        if (!user)
            return done(null, false, req.flash('loginMessage', 'No User Found'));
        if (!user.validPassword(password)) {
            return done(null, false, req.flash('loginMessage', 'Ooops! Wrong Password for the user'));
        }
        return done(null, user);
    }).catch(function(err) {
        return done(err);
    });
}));


passport.serializeUser(function(user, done) {
    console.log(user.id);
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function(err, user) {
        if (err) throw err;
        return done(null, user);
    })
});

module.exports = passport;