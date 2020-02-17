const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Manager', managerSchema);