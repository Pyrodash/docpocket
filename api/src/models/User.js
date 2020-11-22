const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    email: String,
    gender: String,
    height: Number,
    weight: Number,
    password: String,
    isDoctor: Boolean,
})

module.exports = mongoose.model('User', userSchema)