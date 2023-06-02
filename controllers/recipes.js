const Recipe = require('../models/recipe')

const index = async (req, res) => {
  const recipes = await Recipe.find({})
  res.render('recipes/index', { recipes })
}

const create = async (req, res) => {
  try {
    await Recipe.create(req.body)
    res.redirect('/recipes')
  } catch (err) {
    res.render('recipes', { errorMsg: '' })
  }
}

const newRecipe = async (req, res) => {
  res.render('recipes/recipes', { title: 'Recipe', errorMsg: '' })
}

const show = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  res.render('recipes/show', { recipe })
}

const deletePost = 

module.exports = {
  new: newRecipe,
  index,
  create,
  show
}
