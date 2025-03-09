const express = require("express");
const router = express.Router();

const brand1Router = require("./brands/brand1");
const brand2Router = require("./brands/brand2");
const brand3Router = require("./brands/brand3");

router.use("/brand1", brand1Router);
router.use("/brand2", brand2Router);
router.use("/brand3", brand3Router);

module.exports = router;
