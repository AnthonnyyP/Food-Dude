const Post = require ('../models/post')

const index = async (req,res) => {
  res.render('/posts'), 
}

module.exports = {
  index, 
}