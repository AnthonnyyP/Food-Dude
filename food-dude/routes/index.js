const express = require('express')
const router = express.Router()
const passport = require('passport')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'The Food Dude' })
})

router.get('/auth/google', passport.authenticate(
    // Two arguments:
    //First one is Strategy
    'google',
    {
      // Email must be specified separately from profile (id and avatar)
      scope: ['profile', 'email'],
      // Promps which account if you have multiple, if just 1, just logs you in.
      prompt: 'select_account'
    }
  )
)

router.get('/oauth2callback',passport.authenticate(
    // Strategy
    'google',
    {
      //User has consented and logged in, send them where?
      successRedirect: '/recipes',
      //Change to path that makes sense for your app.
      failureRedirect: '/recipes'
    }
  )
)

router.get('/logout', (req, res) => {
  req.logout(() => {
    //Change to path that makes sense for your app.
    res.redirect('index')
  })
})

module.exports = router
