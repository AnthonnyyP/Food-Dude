const express = require('express');
const router = express.Router();

const newRecipesCtrl = require('../controllers/newrecipes');
const newrecipe = require('../models/newrecipe');

router.get('/', newRecipesCtrl.index)
router.post('/posts/:id', newRecipesCtrl.create)
module.exports = router;