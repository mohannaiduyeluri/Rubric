// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const postSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    postTitle: { type: String, required: true },
    postText: { type: String, required: true },
    createdTime: { type: Date, default: Date.now },
    modifiedTime: { type: Date, default: Date.now },
})

// 3. create model of schema
const Post = mongoose.model("Post", postSchema);

// 4. create CRUD functions on model
//CREATE a post
async function createPost(userId, postTitle, postText) {
    // console.log(userId, postTitle, postText);
    const newPost = await Post.create({
        userId: userId,
        postTitle: postTitle,
        postText: postText
    });

    return newPost;
}

//Fetch all posts
async function getAllPosts() {
    return await Post.find();
}

// modify
async function modifyPost(id, postText) {
    const updatedPost = await Post.updateOne({ "_id": id }, { $set: { postText: postText, modifiedTime: Date.now() } });
    return updatedPost;
}

//DELETE
async function deletePost(id) {
    await Post.deleteOne({ "_id": id });
};

// 5. export all functions we want to access in route files
module.exports = {
    createPost, getAllPosts, modifyPost, deletePost,
};