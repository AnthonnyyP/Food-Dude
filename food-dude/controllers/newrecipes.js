const newRecipe = require ('../models/newrecipe')

const index = async (req,res) => {
  const newRecipes = await newRecipe.find({})
  res.render('posts/newrecipes', { newRecipes
  })
}

const create = async (req,res) => {
  const newRecipes = await newRecipe.findById(req.params.id)
  newRecipe..push(req.body); 
  try {
    await flight.save();
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/flights/${flight._id}`)
}

module.exports = {
  index, 
}