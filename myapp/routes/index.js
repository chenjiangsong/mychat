var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cjs' });
});

router.get('/cjs', function(req, res, next) {
  res.render('index', { title: 'caonima' });
});

module.exports = router;
