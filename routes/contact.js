var express = require('express');
var router = express.Router();
var path = require('path');

/* GET contact */
router.get('/', function(req, res, next) {
    res.render('contact');
});

module.exports = router;