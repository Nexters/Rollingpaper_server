var express = require('express');
var router = express.Router();

router.use('/product', require('./product'));
router.use('/user', require('./user'));

module.exports = router;
