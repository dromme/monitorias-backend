const mongoose = require("mongoose");
const materiaSchema = new mongoose.Schema({

    "name":{
        type: String,
        required: true
    },
    "instructors" : [{
        "idInstructor" : {
            type:String}, 
        "name" : {
            type:String},
        "email": {
            type:String}
         }],
    "description":{
        type: String,
        required: true
    },
    "faculty":{
        type: String,
        required: true
    }
});

const materia = mongoose.model('materia',materiaSchema);
module.exports = materia;