const Post = require ('../models/post')

const index = async (req,res) => {
  const posts = await Post.find({})
  res.render('posts/index', { posts
  })
}



module.exports = {
  index, 
}