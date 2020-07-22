var express = require('express');
var router = express.Router();

router.use('/', require('./product'));
router.use('/detail', require('./detail'));

module.exports = router;
