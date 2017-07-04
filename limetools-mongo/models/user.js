const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String
});

UserSchema.methods.validPassword = function(password) {
    return this.password === password;
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;