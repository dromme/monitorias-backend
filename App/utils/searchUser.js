const User = require('../models/students');
const Instructor = require('../models/instructors');

exports.createStudent = (req,res) => {

    const help = {
        idMateriaxinstructor : req.body.idMateriaxinstructor,
        idMateria : req.body.isubscrciptionsdMateria
    };

    const student = new User({
        documentType: req.body.documentType,
        documentNumber: req.body.documentNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subscriptions: help        
    });

    student.save().then(result =>{
        res.send({
            status: 200,
            saved: result
        });
    }).catch(error =>{
        console.log('I couldn\'t save to the db: ', error);
    });
};

exports.createInstructor = (req,res) => {

    const help = {
        idMateriaxinstructor : req.body.idMateriaxinstructor
    };

    const instructor = new Instructor({
        documentType: req.body.documentType,
        documentNumber: req.body.documentNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        cursos: help        
    });

    instructor.save().then(result =>{
        res.send({
            status: 200,
            saved: result
        });
    }).catch(error =>{
        console.log('I couldn\'t save to the db: ', error);
    });
};