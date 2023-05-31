const Recipe = require('../models/recipe')

const index = async (req, res) => {
  const recipes = await Recipe.find({})
  console.log(recipes)
  res.render('recipes/index', { recipes })
}

const create = async (req, res) => {
  console.log(req.body)
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
  console.log(recipe)
  res.render('recipes/show', { recipe })
}

module.exports = {
  new: newRecipe,
  index,
  create,
  show
}
