const recipe = require('../models/recipe');
const Recipe = require('../models/recipe')

const create = async (req, res) => {
  // Destructuring; splitting up req.body into separate fields and assigning them to corresponding keys (based on Schema) within a variable. 
  // User ID is retrieved individual session (whoevers logged in)(not from req.body)
  // newComment === modified req.body 
  // pushing modified req.body on line 15. 

  let {comment,rating, datePosted} = req.body
  const newComment = {
    comment: comment,
    datePosted: datePosted, 
    rating: rating,
    user: req.user._id
  }
  const recipe = await Recipe.findById(req.params.id);
  recipe.comments.push(newComment);
  try {
    await recipe.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/recipes/${recipe._id}`);
}

const deleteReview = (req, res, next) => {
  Recipe.findOne({
    'comments._id': req.params.id, 
    'comments.user': req.user._id
  }).then((recipe) => {
    if (!recipe) return res.redirect('/recipes');
    recipe.comments.remove(req.params.id); 
    recipe.save().then(() => {
      res.redirect(`/recipes/${recipe._id}`)
    })
  .catch((error) => {
    return next (error);
  })
})
}

// const deletePost = async (req, res, next) => {
//   try {
//     await recipe.Recipe
//   } catch (err) {

//   }
// } 

module.exports = {
  create, 
  delete: deleteReview, 
}