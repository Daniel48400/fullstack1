const express = require('express')
const mongoose = require('mongoose')
const ctrlPost = require('../controllers/ctrl_posts')

let router = express.Router()

// get posts
router.get('/',ctrlPost.getAllPosts)

// add posts
router.put('/', ctrlPost.addPost)

// delete posts
router.delete('/:id', ctrlPost.deletePost)

module.exports = router