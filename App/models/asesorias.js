const mongoose = require("mongoose");
const asesoriaSchema = new mongoose.Schema({
    
    "lugar":{
        type: String,
        required: true
    },
    "materia":{
        type: String,
        required: true
    },
    "fechaDia":{
        type: String,
        required: true
    },
    "fechaMes":{
        type: String,
        required: true
    },
    "fechaAño":{
        type: String,
        required: true
    },
    "horaInicio":{
        type: String,
        required: true
    },
    "horaFin":{
        type: String,
        required: true
    },
    "idAsesor":{
        type: String,
        required: true,
        trim: true
    },
    "asistentes":{
        type: Array
    }
});

const asesoria = mongoose.model('quote',asesoriaSchema);
module.exports = asesoria;