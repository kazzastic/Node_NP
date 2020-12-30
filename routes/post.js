const express = require('express');
const router = express.Router();
const get_post = require('../controllers/showPosts')
const send_post = require('../controllers/sendPost');
const delete_post = require('../controllers/deletePost');

router.get('/', get_post.get_all_posts);

router.post('/', send_post.send_post);

router.get('/:postId', get_post.get_one_post);

router.delete('/:postId', delete_post.delete_post);

//router.patch('/:postId', );

module.exports = router;