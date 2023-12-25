var express = require('express');
var router = express.Router();
var path = require('path');

/* GET about */
router.get('/', function(req, res, next) {
  res.render('about');
});

module.exports = router;
