const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/user/no-permission');
  }
  next();
};

router.get('/logged', isLogged, (req, res) => {
  const userName = req.user.displayName;
  const avatar = req.user.photos[0].value;

  res.render('logged', { userName, avatar });
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('profile/settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});
module.exports = router;
