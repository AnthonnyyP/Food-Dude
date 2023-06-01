const Recipe = require('../models/recipe')

const create = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  recipe.comments.push(req.body);
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/recipes/${recipe._id}`);
}

module.exports = {
  create, 
}