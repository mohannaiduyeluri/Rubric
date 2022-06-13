// 1. import any needed libraries
const express = require("express");
const Post = require('../models/post'); //accesses functions in user model file
const router = express.Router();

// 2. create all routes to access database
router
    .get('/fetch', async (req, res) => {
        try {
            const posts = await Post.getAllPosts();
            res.send(posts);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })
    .post('/create', async (req, res) => {
        try {
            const post = await Post.createPost(req.body.userId, req.body.postTitle, req.body.postText);
            res.send(post);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })
    .put('/modify', async (req, res) => {
        try {
            const post = await Post.modifyPost(req.body.id, req.body.postText);
            res.send(post);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await Post.deletePost(req.body.id);
            res.send({ success: "Post deleted" });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

// 3. export router for use in index.js
module.exports = router;