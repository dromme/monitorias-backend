const mongoose = require("mongoose");
const materiaxInstructorSchema = new mongoose.Schema({
    
    "idMateria":{
        type: String,
        required: true
    },
    "semester":{
        type: String,
        required: true
    },
    "idInstructor":{
        type: String,
        required: true
    },
    "description":{
        type: String,
        required: true
    },
    "asesoria" : [{
        "idAsesoria" : {
            type:String}
         }],
    "asesoriaPrivada" : [{
        "idAsesoria" : {
            type:String}
         }],
    "subscriptors" : [{
        "id" : {
            type:String}, 
        "name" : {
            type:String},
        "email": {
            type:String}
         }]
});

const materiaxinstructor = mongoose.model('materiaxinstructor',materiaxInstructorSchema);
module.exports = materiaxinstructor;