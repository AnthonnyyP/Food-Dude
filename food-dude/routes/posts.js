const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts')

router.get('/posts', postsCtrl.index)

module.exports = router;