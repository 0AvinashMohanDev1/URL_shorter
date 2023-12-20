const mongoose = require("mongoose");

// Define a user schema
const userSchema = new mongoose.Schema({
    username: String,
    email:String,
    password: String,
});

// Create a User model
const User = mongoose.model("User", userSchema);

module.exports = User;
