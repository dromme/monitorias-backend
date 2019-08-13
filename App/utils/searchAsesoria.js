const Asesoria = require('../models/asesorias');

exports.getAsesoriaByDay = (req,res) =>{

    Asesoria.find({date: {"$regex":req.query.dia, "$options": "i" }}, (err,result) =>{

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

    Asesoria.find({date: {"$regex":req.query.mes, "$options": "i" }}, (err,result) =>{

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

    const help = {
        id : req.body.idInstructor,
        idMateria: req.body.nameInstructor
    };

    const help1 = {
        name : req.body.nameSubscriptor,
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
        timeInit:  req.body.timeInit,
        timeEnd: req.body.timeEnd
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

exports.getAsesoriaByInstructor = (req,res) => {

    Asesoria.find({idInstructor: req.query.idInstructor}, (err,result) =>{

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

exports.getAllAsesorias = (req,res) => {

    Asesoria.find({}, (err,result) =>{

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