const passport = require('passport')
// Javascript Class : starts with capital.
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// Used to find the User.
const User = require('../models/user')



passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  //cb = callback function 
  async (accessToken, refreshToken, profile, cb) => {
    //User has logged in via oAuth. 
    //Profile object contains: ID, displayName, email, and avatar. 
    try {
      //This expression finds the existing user.
      let user = await User.findOne({
        googleId: profile.id
      })
      // If the value is null, we have a new user. 
      if (user) return cb(null, user)
      // This is used when a new user has been created.
      user = await User.create({
        name: profile.displayName,
        googleId: profile.id, 
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
      })
      return cb(null, user)
    } catch (err) {
      return cb(err)
    }
  }
))

passport.serializeUser( (user, cb) => {
  cb(null, user._id)
})

passport.deserializeUser(async (userId,cb) => {
  cb(null, await User.findById(userId));
})