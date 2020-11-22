const boom = require('boom')

// get data models
const Patient = require('../models/Patient')


exports.getSinglePatient = async (req, reply) => {
    try {
        const id = req.params.id
        const patient = await Patient.findById(id)
        return patient
    } catch (err) {
        throw boom.boomify(err)
    }
}

// registering a patient account
exports.addDoctor = async (req, reply) => {
    try {
        const patient = new Patient(req.body)
        return patient.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// update patient info
exports.updatePatient = async (req, reply) => {
    try {
        const id = req.params.id
        const patient = req.body
        const { ...updateData } = patient
        const update = await Patient.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}
