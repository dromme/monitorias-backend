const mongoose = require("mongoose");
const instructorSchema = new mongoose.Schema({
    
    "documentType":{
        type: String,
        required: true
    },
    "documentNumber":{
        type: String,
        required: true
    },
    "firstName":{
        type: String,
        required: true
    },
    "lastName":{
        type: String,
        required: true
    },
    "email":{
        type: String,
        required: true
    },
    "cursos" : [{
        "idMateriaxinstructor" : {type:String}
         }]
});

const instructor = mongoose.model('instructor',instructorSchema);
module.exports = instructor;