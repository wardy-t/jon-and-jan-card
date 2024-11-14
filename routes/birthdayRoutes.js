const express = require('express');
const router = express.Router();
const birthdayController = require('../controllers/birthdayController');

router.get('/', birthdayController.showHomePage);

module.exports = router;