var express = require('express');
var router = express.Router();

router.use('/rolling', require('./rolling'));

module.exports = router;
