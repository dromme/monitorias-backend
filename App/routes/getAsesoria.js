const express = require('express');
const router = express.Router();
const Asesoria = require('../utils/searchAsesoria');

router.get('/byDay',Asesoria.getAsesoriaByDay);
router.get('/byWeek',Asesoria.getAsesoriaByDay);
router.get('/byMonth',Asesoria.getAsesoriaByDay);

router.post('/createAsesoria',Asesoria.createAsesoria);

    



module.exports = router;