// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const followerSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    followerUserId: { type: String, required: true },
    createdTime: { type: Date, default: Date.now }
})

// 3. create model of schema
const Follower = mongoose.model("Follower", followerSchema);

// 4. create CRUD functions on model
//ADD a follower
async function addFollower(userId, followerUserId) {

    const newFollower = await Follower.create({
        userId: userId,
        followerUserId: followerUserId
    });

    return newFollower;
}

//GET all followers
async function getFollowers(userId) {
    return await Follower.find({ "userId": userId });
}

//REMOVE
async function removeFollower(id) {
    await Follower.deleteOne({ "_id": id });
};

// 5. export all functions we want to access in route files
module.exports = {
    addFollower, getFollowers, removeFollower
};