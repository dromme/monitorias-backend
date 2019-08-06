const mongoose = require("mongoose");
const asesoriaSchema = new mongoose.Schema({
    "lugar":{
        type: String,
        required: true
    },
    "fecha-día":{
        type: String,
        required: true
    },
    "fecha-mes":{
        type: String,
        required: true
    },
    "fecha-año":{
        type: String,
        required: true
    },
    "hora-inicio":{
        type: String,
        required: true
    },
    "hora-fin":{
        type: String,
        required: true
    },
    "id-asesor":{
        type: String,
        required: true
    },
    "asistentes":{
        type: Array
    }
});

const asesoria = mongoose.model('quote',asesoriaSchema);
module.exports = asesoria;