const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const golfSchema = new Schema({
    titre: {
        type: String,
        required: true
        unique: true
    },
    description: {
        type: String
    },
    position: {
        type: { type: String},
        coordinates: [Number, Number],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    manager: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

golfSchema.index({"position" : "2dsphere"});

module.exports = mongoose.model('Golf', golfSchema);