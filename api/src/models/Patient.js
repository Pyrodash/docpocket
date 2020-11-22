const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    email: String,
    gender: String,
    height: Number,
    weight: Number,
    password: String,
    doctorsIds: [{
        type: Number
    }]
})

module.exports = mongoose.model('Patient', patientSchema)