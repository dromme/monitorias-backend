const Curso = require('../models/materiaxinstructor');

exports.subscribeToCurso = (req, res) => {

    Curso.find({ _id: req.body.id }, (err, result) => {

        if (result.length == 0 || err) {
            res.status(400).send({
                message: "Error searching in bd",
                error: err
            });
        } else {

            let subscriptor = {
                id: req.body.idStudent,
                name: req.body.name,
                email: req.body.email
            };

            result[0].subscriptors.push(subscriptor);

            Curso.findByIdAndUpdate({ _id: result[0]._id }, { $set: {subscriptors: result[0].subscriptors} },(err, resultado) => {
                res.status(200).send({
                    data: resultado
                });
            });        
        }
    });
};