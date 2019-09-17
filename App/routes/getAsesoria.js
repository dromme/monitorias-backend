const express = require('express');
const router = express.Router();
const Asesoria = require('../utils/searchAsesoria');
const Subscribe = require('../utils/subscription');

router.get('/byDay',Asesoria.getAsesoriaByDay);
router.get('/byMonth',Asesoria.getAsesoriaByMonth);
router.post('/createAsesoria',Asesoria.createAsesoria);
router.get('/byInstructor',Asesoria.getAsesoriaByInstructor);
router.get('/getAllAsesorias',Asesoria.getAllAsesorias);
router.get('/getAsesoriasByStudent',Subscribe.getAsesoriasByStudent);
router.post('/attendAsesoria',Subscribe.attendAsesoria);
    
module.exports = router;