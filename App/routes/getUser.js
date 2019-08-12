const express = require('express');
const router = express.Router();
const User = require('../utils/searchUser');

router.post('/createStudent',User.createStudent);
router.post('/createInstructor',User.createInstructor);



module.exports = router;