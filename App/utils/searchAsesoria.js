const Asesoria = require('../models/asesorias');

exports.getAsesoriaByDay = () =>{




};


exports.getAsesoriaByWeek = () => {




};

exports.getAsesoriaByMonth = () => {



};

exports.createAsesoria = (req,res) => {

    const asesoria = new Asesoria({
        lugar: req.body.lugar,
        materia: req.body.materia,
        fechaDia: req.body.fechaDia,
        fechaMes: req.body.fechaMes,
        fechaAño: req.body.fechaAño,
        horaInicio: req.body.horaInicio,
        horaFin: req.body.horaFin,
        idAsesor: req.body.idAsesor
    });

    asesoria.save().then(result =>{
        res.send({
            status: 200,
            saved: result
        });
    }).catch(error =>{
        console.log('I couldn\'t save to the db: ', error);
    });
};


