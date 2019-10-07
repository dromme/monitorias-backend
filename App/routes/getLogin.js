const express = require('express');
const router = express.Router();
const login = require('../utils/login');

router.get('/login',login.userLogin);

module.exports = router;