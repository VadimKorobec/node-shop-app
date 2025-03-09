const express = require('express');
const router = express.Router();

const brand2Controller = require('../../controllers/brand2')

router.get('/', brand2Controller.getAll)


module.exports = router