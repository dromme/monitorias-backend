const mongoose = require("mongoose");
const asesoriaSchema = new mongoose.Schema({

    "name": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "place": {
        type: String,
        required: true
    },
    "idMateria": {
        type: String,
        required: true
    },
    "semester": {
        type: String,
        required: true
    },
    "idInstructor": {
        type: String,
        required: true
    },
    "subscriptors": [{
        "idStudent": {
            type: String
        },
        "name": {
            type: String
        },
        "email": {
            type: String
        },
        "state": {
            type: String
        }
    }],
    "date": {
        type: String,
        required: true,
        trim: true
    },
    "timeInit": {
        type: String,
        required: true
    },
    "timeEnd": {
        type: String,
        required: true
    }
});

const asesoria = mongoose.model('quote', asesoriaSchema);
module.exports = asesoria;