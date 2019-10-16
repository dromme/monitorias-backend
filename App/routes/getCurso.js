const express = require('express');
const router = express.Router();
const Curso = require('../utils/searchCurso');
const Subscribe = require('../utils/subscription');
const checkAuth = require('../middleware/check-auth');

router.post('/createCurso',Curso.createCurso);
router.get('/getAllCursos',Curso.getAllMaterias);
router.post('/createMateria',Curso.createMateria);
router.get('/getAllMateriasxInstructor',Curso.getAllCursos);
router.post('/subscribeToCurso',Subscribe.subscribeToCurso);
router.get('/getSubscriptions',Subscribe.getSubscriptionsByStudent);
//Get all asesorías by course
//Get all asesorías 

//Search in passport.js to use the Google Oauth

module.exports = router;