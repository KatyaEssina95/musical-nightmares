var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/account', function (req, res) {
  if (req.isAuthenticated()) {
    res.render('account', {user: req.user});
  } else {
    res.redirect('/auth/login');
  }
})

module.exports = router;
