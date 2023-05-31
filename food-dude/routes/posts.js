const express = require('express');
const router = express.Router();

const allRecipesCtrl = require('../controllers/posts')

router.get('/', allRecipesCtrl.index)

module.exports = router;