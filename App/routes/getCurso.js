const express = require('express');
const router = express.Router();
const Curso = require('../utils/searchCurso');

router.post('/createCurso',Curso.createCurso);
router.get('/getAllCursos',Curso.getAllMaterias);
router.post('/createMateria',Curso.createMateria);
router.get('/getAllMateriasxInstructor',Curso.getAllCursos);

module.exports = router;