module.exports = (req,res) => {
  if (req.isAuthenticated()) return next(); 
  res.redirect('/auth/google');
}