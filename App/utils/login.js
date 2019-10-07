const Student = require('../models/students');
const jwt = require('jsonwebtoken');


exports.userLogin = (req, res) => {

    Student.find({ email: req.query.email, password: req.query.password }, (err, result) => {

        if (result.length == 0 || err) {
            res.status(404).send({
                message: 'Wrong email or password',
                error: err
            });
        }
        const token = jwt.sign({    //Creación de token de duración 5 minutos
            email: result.email,
            userId: result.account
        }, "secret",
            {
                expiresIn: "15m"
            }
        );

        console.log('Token creado');

        res.status(200).send({
            message: 'login successful',
            Student: result,
            token: token
        });
    });
};