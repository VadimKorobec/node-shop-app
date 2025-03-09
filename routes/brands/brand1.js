const express = require('express');
const router = express.Router();

const brand1Controller = require('../../controllers/brand1')

router.get('/', brand1Controller.getAll)


module.exports = router;