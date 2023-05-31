const express = require('express');
const router = express.Router();

const newRecipesCtrl = require('../controllers/newrecipes')

router.get('/', newRecipesCtrl.index)

module.exports = router;