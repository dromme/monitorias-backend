const Curso = require('../models/materiaxinstructor');
const Materia = require('../models/materias');
const Instructor = require('../models/instructors');

//MateriaXInstructor
exports.createCurso = (req, res) => {

    Curso.find({ idInstructor: req.body.idInstructor, semester: req.body.semester }, (error, result) => {

        if (error) { console.log(error); }

        if (result.length == 0) {
            res.status(400).send({
                message: 'There is already a curso with the assigned instructor in the same semester'
            });
        } else {


            const help1 = {
                idAsesoria: req.body.idAsesoria
            };

            const help2 = {
                idAsesoriaPrivada: req.body.idAsesoriaPrivada
            };

            const help3 = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email
            };

            const curso = new Curso({
                idMateria: req.body.idMateria,
                semester: req.body.semester,
                idInstructor: req.body.idInstructor,
                description: req.body.description,
                asesoria: help1,
                asesoriaPrivada: help2,
                subscriptors: help3
            });

            curso.save().then(result => {

                //Add id to Instructor here
                Instructor.find({documentNumber:idInstructor},(err,resultado)=>{
                    resultado[0].cursos.push(result._id);
                    Instructor.findOneAndUpdate({documentNumber:idInstructor},{ $set: { cursos: resultado[0].cursos } },(err,re)=>{
                        res.status(200).send({
                            saved: result
                        });
                    });
                });
                //                
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

exports.getAllMaterias = (req, res) => {

    Materia.find({}, (err, result) => {

        if (result.length == 0 || err) {
            res.status(400).send({
                message: "Error searching in bd",
                error: err
            });
        } else {
            console.log("Results tiene ", result);
            res.status(200).send({
                data: result
            });
        }
    });
};

exports.createMateria = (req, res) => {

    Materia.find({ name: req.body.name, faculty: req.body.faculty }, (error, result) => {

        if (error) { console.log(error); }

        if (result.length != 0) {
            res.status(400).send({
                message: 'There is already a materia with the same name in the same faculty'
            });
        } else {


            const help = {
                idInstructor: req.body.idInstructor,
                name: req.body.nameInstructor,
                email: req.body.email
            };

            const materia = new Materia({
                name: req.body.name,
                instructors: help,
                description: req.body.description,
                faculty: req.body.faculty
            });

            materia.save().then(result => {
                res.status(200).send({
                    saved: result
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

exports.getAllCursos = (req, res) => {

    Curso.find({}, (err, result) => {

        if (result.length == 0 || err) {
            res.stats(400).send({
                message: "Error searching in bd",
                error: err
            });
        } else {
            console.log("Results tiene ", result);
            res.status(200).send({
                data: result
            });
        }
    });
};

