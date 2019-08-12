const express = require('express');
const router = express.Router();
const Asesoria = require('../utils/searchAsesoria');

router.get('/byDay',Asesoria.getAsesoriaByDay);
router.get('/byMonth',Asesoria.getAsesoriaByMonth);
router.post('/createAsesoria',Asesoria.createAsesoria);
router.get('/byMonitor',Asesoria.getAsesoriaByMonitor);
    
module.exports = router;