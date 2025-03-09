const express = require('express');
const router = express.Router();

const brand3Controller = require('../../controllers/brand3');

router.get('/', brand3Controller.getAll)


module.exports = router;