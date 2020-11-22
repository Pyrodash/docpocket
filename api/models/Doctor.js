const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  clinic: String,
  userId: Number,
  password: String,
  patientIds: [{
    type: Number
  }]
})

module.exports = mongoose.model('Doctor', doctorSchema)