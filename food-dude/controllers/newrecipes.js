const newRecipe = require ('../models/newrecipe')

const index = async (req,res) => {
  const newRecipes = await newRecipe.find({})
  res.render('posts/newrecipes', { newRecipes
  })
}

module.exports = {
  index, 
}