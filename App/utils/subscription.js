const Curso = require('../models/materiaxinstructor');
const Student = require('../models/students');
const Asesoria = require('../models/asesorias');

exports.subscribeToCurso = (req, res) => {

    Curso.find({ _id: req.body.id }, (err, result) => {

        if (err|| result.length == 0 ) {
            res.status(404).send({
                message: "We couldn't find the curso",
                error: err
            });
        } else {

            let subscriptor = {
                id: req.body.idStudent,
                name: req.body.name,
                email: req.body.email
            };

            result[0].subscriptors.push(subscriptor);

            let subscriptions = {
                idMateria: result[0].idMateria,
                idMateriaxinstructor: result[0]._id
            };
            //Updating the subscriptors in the curso
            Curso.findByIdAndUpdate({ _id: result[0]._id }, { $set: { subscriptors: result[0].subscriptors } }, (err, resultado) => {
                //Finding the student
                Student.find({ documentNumber: req.body.idStudent }, (err, retorno) => {
                    if (err || retorno.length == 0) {
                        res.status(404).send({
                            message: "there was an error, we couldn't find the student",
                            error: err
                        });

                    }
                    retorno[0].subscriptions.push(subscriptions);
                    //Updating the subscriptions array of the student
                    Student.findOneAndUpdate({ documentNumber: req.body.idStudent }, { $set: { subscriptions: retorno[0].subscriptions } }, (err, resul) => {
                        if (err) {
                            res.status(404).send({
                                message: "there was an error",
                                error: err
                            });
                        } else {
                            res.status(200).send({
                                data: resultado
                            });
                        }
                    });
                });
            });
        }
    });
};

exports.getSubscriptionsByStudent = (req, res) => {
    Student.find({ documentNumber: req.query.idStudent }, (err, result) => {
        if (err || result.length == 0) {
            res.status(404).send({
                message: "We couldn't find the student in our db",
                error: err
            });
        } else {
            res.status(200).send({
                data: result[0].subscriptions
            });
        }
    });
};

exports.getAsesoriasByStudent = (req, res) => {
    Student.find({ documentNumber: req.query.idStudent }, (err, result) => {
        if (err || result.length == 0) {
            res.status(404).send({
                message: "We couldn't find the student in our db",
                error: err
            });
        } else {
            res.status(200).send({
                data: result[0].asesoriaAttendance
            });
        }
    });
};

//Subscribe to asesoría
exports.attendAsesoria = (req, res) => {

    Asesoria.find({ _id: req.body.id }, (err, result) => {

        if (err || result.length == 0) {
            res.status(404).send({
                message: "We couldn't find the Asesoría",
                error: err
            });
        } else {

            let subscriptor = {
                idStudent: req.body.idStudent,
                name: req.body.name,
                email: req.body.email,
                state: req.body.state
            };

            result[0].subscriptors.push(subscriptor);

            let attend = {
                idAsesoria: result[0]._id,
                name: result[0].name,
                date: result[0].date,
                idMateriaxinstructor: result[0].materiaxinstructor.id
            };
            //Updating the subscriptors in the curso
            Asesoria.findByIdAndUpdate({ _id: result[0]._id }, { $set: { subscriptors: result[0].subscriptors } }, (err, resultado) => {
                //Finding the student
                Student.find({ documentNumber: req.body.idStudent }, (err, retorno) => {
                    if (err || retorno.length == 0) {
                        res.status(404).send({
                            message: "there was an error, we couldn't find the student",
                            error: err
                        });

                    } else {
                        retorno[0].asesoriaAttendance.push(attend);
                        //Updating the subscriptions array of the student
                        Student.findOneAndUpdate({ documentNumber: req.body.idStudent }, { $set: { asesoriaAttendance: retorno[0].asesoriaAttendance } }, (err, resul) => {
                            if (err) {
                                res.status(404).send({
                                    message: "there was an error",
                                    error: err
                                });
                            } else {
                                res.status(200).send({
                                    data: resultado
                                });
                            }
                        });
                    }
                });
            });
        }
    });
};