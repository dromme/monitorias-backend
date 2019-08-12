const Asesoria = require('../models/asesorias');

exports.getAsesoriaByDay = (req,res) =>{

    Asesoria.find({ fechaDia: req.query.fechaDia,fechaMes: req.query.fechaMes}, (err,result) =>{

        if( result.length==0 || err ){
            res.send({
                status:400,
                message: "Error searching in bd",
                error: err  
            });
        }else{
            console.log("Results tiene ", result);
            res.send({
                status:200,
                message: "The results are",
                data: result
            });
        }
    });
};

exports.getAsesoriaByMonth = (req,res) => {

    Asesoria.find({fechaMes: req.query.fechaMes}, (err,result) =>{

        if( result.length==0 || err ){
            res.send({
                status:400,
                message: "Error searching in bd",
                error: err  
            });
        }else{
            console.log("Results tiene ", result);
            res.send({
                status:200,
                message: "The results are",
                data: result
            });
        }
    });
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

exports.getAsesoriaByMonitor = (req,res) => {

    Asesoria.find({idAsesor: req.query.idAsesor}, (err,result) =>{

        if( result.length==0 || err ){
            res.send({
                status:400,
                message: "Error searching in bd",
                error: err  
            });
        }else{
            console.log("Results tiene ", result);
            res.send({
                status:200,
                message: "The results are",
                data: result
            });
        }
    });
};  