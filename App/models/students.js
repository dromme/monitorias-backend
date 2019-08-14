const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    
    "documentType":{
        type: String,
        required: true
    },
    "documentNumber":{
        type: String,
        required: true,
        unique: true,
        dropDups: true
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
    "subscriptions" : [{
        "idMateriaxinstructor" : {type:String}, 
        "idMateria" : {type:String}
         }]
});

const student = mongoose.model('student',studentSchema);
module.exports = student;