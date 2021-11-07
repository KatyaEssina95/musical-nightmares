var express = require('express'),
  passport = require('passport'),
  router = express.Router();

  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  })

  router.get(
    '/spotify', 
    passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private'],
      showDialog: true
    })
  );

  router.get(
    '/spotify/callback',
    passport.authenticate('spotify', {failureRedirect: '/'}),
    function (req, res) {
      res.redirect('/')
    }
  )

module.exports = router