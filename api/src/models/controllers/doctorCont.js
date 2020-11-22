const boom = require('boom')

// get data models
const Doctor = require('../models/Doctor')


exports.getSingleDoctor = async (req, reply) => {
    try {
        const id = req.params.id
        const doctor = await Doctor.findById(id)
        return doctor
    } catch (err) {
        throw boom.boomify(err)
    }
}

// registering a doctor account
exports.addDoctor = async (req, reply) => {
    try {
        const doctor = new Doctor(req.body)
        return doctor.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// update doctor info
exports.updateDoctor = async (req, reply) => {
    try {
        const id = req.params.id
        const doctor = req.body
        const { ...updateData } = doctor
        const update = await Doctor.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}
