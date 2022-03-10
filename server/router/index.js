const express = require("express");
const { join } = require("path");
const { aboutPageHandle, contactPageHandle, singlePostHandle } = require("../controllers");
const notFoundHandle = require("../controllers/errors");

const router = express.Router();

router.get('/about', aboutPageHandle);
router.get('/contact', contactPageHandle);
router.get('/single-post', singlePostHandle);

router.use(notFoundHandle);

module.exports = router;