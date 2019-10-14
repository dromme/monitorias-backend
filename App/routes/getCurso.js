const express = require('express');
const router = express.Router();
const Curso = require('../utils/searchCurso');
const Subscribe = require('../utils/subscription');

router.post('/createCurso',Curso.createCurso);
router.get('/getAllCursos',Curso.getAllMaterias);
router.post('/createMateria',Curso.createMateria);
router.get('/getAllMateriasxInstructor',Curso.getAllCursos);
router.post('/subscribeToCurso',Subscribe.subscribeToCurso);

module.exports = router;