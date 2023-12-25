var express = require('express');
var router = express.Router();
var path = require('path');

/* GET Projects */
router.get('/', function(req, res, next) {
   res.render('projects');
});


module.exports = router;