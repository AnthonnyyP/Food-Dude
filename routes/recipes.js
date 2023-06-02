const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', recipesCtrl.index)

router.get('/new', ensureLoggedIn, recipesCtrl.new)

router.get('/:id', recipesCtrl.show);

router.post('/',ensureLoggedIn, recipesCtrl.create)

module.exports = router;