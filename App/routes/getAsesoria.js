const express = require('express');
const router = express.Router();
const Asesoria = require('../utils/searchAsesoria');

router.get('/byDay',Asesoria.getAsesoriaByDay);
router.get('/byWeek',Asesoria.getAsesoriaByWeek);
router.get('/byMonth',Asesoria.getAsesoriaByMonth);

router.post('/createAsesoria',Asesoria.createAsesoria);

    



module.exports = router;