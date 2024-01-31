const { default: Password } = require('antd/es/input/Password');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    mobileNumber: Number,
    password: Mixed,
    confirmPassword: Mixed,
});

const User = mongoose.model('user', UserSchema);

module.exports = User; 