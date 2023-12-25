var express = require('express');
var router = express.Router();
var path = require('path');

/* GET login */
router.get('/', function(req, res, next) {
    res.render('login');
})

module.exports = router;