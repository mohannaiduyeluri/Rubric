// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emailId: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdTime: { type: Date, default: Date.now },
    modifiedTime: { type: Date, default: Date.now },
})

// 3. create model of schema
const User = mongoose.model("User", userSchema);

// 4. create CRUD functions on model
//CREATE a user
async function register(name, emailId, password) {
    const user = await getUser(emailId);
    if (user) throw Error('Email already in use');

    const newUser = await User.create({
        name: name,
        emailId: emailId,
        password: password
    });

    return newUser;
}

// READ a user
async function login(emailId, password) {
    const user = await getUser(emailId);
    if (!user) throw Error('User not found');
    if (user.password != password) throw Error('Wrong Password');

    return user;
}

// UPDATE
async function updatePassword(id, password) {
    const user = await User.updateOne({ "_id": id }, { $set: { password: password, modifiedTime: Date.now() } });
    return user;
}

//DELETE
async function deleteUser(id) {
    await User.deleteOne({ "_id": id });
};

//GET all users
async function getAllUsers() {
    return await User.find();
}
// utility functions
async function getUser(emailId) {
    return await User.findOne({ "emailId": emailId });
}

// 5. export all functions we want to access in route files
module.exports = {
    register, getAllUsers, login, updatePassword, deleteUser
};