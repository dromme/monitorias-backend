const Asesoria = require('../models/asesorias');
const Curso = require('../models/materiaxinstructor');

exports.getAsesoriaByDay = (req, res) => {

    Asesoria.find({ date: { "$regex": req.query.dia, "$options": "i" } }, (err, result) => {

        if (result.length == 0 || err) {
            res.status(400).send({
                message: "Error searching in bd",
                error: err
            });
        } else {
            console.log("Results tiene ", result);
            res.status(200).send({
                message: "The results are",
                data: result
            });
        }
    });
};

exports.getAsesoriaByMonth = (req, res) => {

    Asesoria.find({ date: { "$regex": req.query.mes, "$options": "i" } }, (err, result) => {

        if (result.length == 0 || err) {
            res.status(400).send({
                message: "Error searching in bd",
                error: err
            });
        } else {
            console.log("Results tiene ", result);
            res.status(200).send({
                message: "The results are",
                data: result
            });
        }
    });
};

exports.createAsesoria = (req, res) => {

    Asesoria.find({ idInstructor: req.body.idInstructor, timeInit: req.body.timeInit, date: req.body.date }, (error, result) => {
        if (error) { console.log(error); }

        if (result.length != 0) {
            res.status(400).send({
                message: 'There is already an Asesoria with this Instructor at this same time in the same date'
            });
        } else {


            const help = {
                id: req.body.idMateriaxInstructor,
                idMateria: req.body.idMateria
            };

            //Not necessary, just for instanciating the data.
            const help1 = {
                idStudent: req.body.idStudent,
                name: req.body.nameSubscriptor,
                email: req.body.email,
                state: req.body.state
            };

            const asesoria = new Asesoria({
                name: req.body.name,
                description: req.body.description,
                place: req.body.place,
                materiaxinstructor: help,
                semester: req.body.semester,
                idInstructor: req.body.idInstructor,
                subscriptors: help1,
                date: req.body.date,
                timeInit: req.body.timeInit,
                timeEnd: req.body.timeEnd,
                idMateria: req.body.idMateria
            });

            asesoria.save().then(resultadito => {
                res.status(200).send({
                    saved: resultadito
                });
            }).catch(error => {
                console.log('I couldn\'t save to the db: ', error);
                res.status(400).send({
                    message: 'Error saving to the DB',
                    error: error
                });
            });
        }
    });
};

exports.getAsesoriaByInstructor = (req, res) => {

    Asesoria.find({ idInstructor: req.query.idInstructor }, (err, result) => {

        if (result.length == 0 || err) {
            res.status(400).send({
                message: "Error searching in bd",
                error: err
            });
        } else {
            res.status(200).send({
                message: "The results are",
                data: result
            });
        }
    });
};

exports.getAllAsesorias = (req, res) => {

    Asesoria.find({}, (err, result) => {

        if (result.length == 0 || err) {
            res.status(400).send({
                message: "Error searching in bd",
                error: err
            });
        } else {
            res.status(200).send({
                message: "The results are",
                data: result
            });
        }
    });
};  