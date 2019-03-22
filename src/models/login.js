const mongoose = require('mongoose');
const {Schema} = mongoose;

const LoginSchema = new Schema({
    user: {type: String, required: true},
    pass: {type: String, required: true}
});

module.exports = mongoose.model('Login', LoginSchema);