const User = require('../models/students');
const Instructor = require('../models/instructors');

exports.createStudent = (req, res) => {


    User.find({ documentNumber: req.body.documentNumber }, (err, result) => {

        if (err) {
            console.log(err);
        }

        if (result != 0) {
            console.log('There is already an Instructor with your id number');
            res.status(404).send({
                message: 'there is already an Instructor with your id number'
            });
        } else {


            const help = {
                idMateriaxinstructor: req.body.idMateriaxinstructor,
                idMateria: req.body.isubscrciptionsdMateria
            };

            const student = new User({
                documentType: req.body.documentType,
                documentNumber: req.body.documentNumber,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                subscriptions: help
            });

            student.save().then(result => {
                res.status(200).send({
                    saved: result
                });
            }).catch(error => {
                console.log('I couldn\'t save to the db: ', error);
            });
        }
    });
};

exports.createInstructor = async (req, res) => {

    await Instructor.find({ documentNumber: req.body.documentNumber }, (err, result) => {

        if (err) {
            console.log(err);
        }

        if (result.length != 0) {
            console.log('There is already an Instructor with your id number');
            res.status(404).send({
                message: 'there is already an Instructor with your id number'
            });

        } else {



            const help = {
                idMateriaxinstructor: req.body.idMateriaxinstructor
            };

            const instructor = new Instructor({
                documentType: req.body.documentType,
                documentNumber: req.body.documentNumber,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                cursos: help
            });

            instructor.save().then(result => {
                res.status(200).send({
                    saved: result
                });
            }).catch(error => {
                console.log('I couldn\'t save to the db: ', error);
            });
        }
    });
};