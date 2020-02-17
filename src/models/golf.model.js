const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const golfSchema = new Schema({
    titre: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    position: {
        type: { type: String},
        coordinates: [Number, Number],
    },
    manager: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

golfSchema.index({"position" : "2dsphere"});

module.exports = mongoose.model('Golf', golfSchema);