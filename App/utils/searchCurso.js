const Curso = require('../models/materiaxinstructor');
const Materia = require('../models/materias');

exports.createCurso = (req,res) => {

    const help1 = {
        idAsesoria : req.body.idAsesoria
    };

    const help2 = {
        idAsesoriaPrivada : req.body.idAsesoriaPrivada
    };

    const help3 = {
        id : req.body.id,
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

    curso.save().then(result =>{
        res.send({
            status: 200,
            saved: result
        });
    }).catch(error =>{
        console.log('I couldn\'t save to the db: ', error);
    });
};

exports.getAllMaterias = (req,res) => {

    Materia.find({}, (err,result) =>{

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

exports.createMateria = (req,res) => {

    const help = {
        idInstructor : req.body.idInstructor,
        name: req.body.nameInstructor,
        email: req.body.email
    };

    const materia = new Materia({
        name: req.body.name,
        instructors: help,
        description: req.body.description,
        faculty: req.body.faculty          
    });

    materia.save().then(result =>{
        res.send({
            status: 200,
            saved: result
        });
    }).catch(error =>{
        console.log('I couldn\'t save to the db: ', error);
    });
};
