// 1. import any needed libraries
const express = require("express");
const Follower = require('../models/follower'); //accesses functions in user model file
const router = express.Router();

// 2. create all routes to access database
router
    .post('/add', async (req, res) => {
        try {
            const follower = await Follower.addFollower(req.body.userId, req.body.followerUserId);
            res.send(follower);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })
    .post('/fetch', async (req, res) => {
        try {
            const followers = await Follower.getFollowers(req.body.userId);
            res.send(followers);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })
    .delete('/remove', async (req, res) => {
        try {
            await Follower.removeFollower(req.body.id);
            res.send({ success: "Follower deleted" });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

// 3. export router for use in index.js
module.exports = router;