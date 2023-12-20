// Import necessary modules and configurations
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import the Redis client for token storage
const { redisClient } = require("../Config/redis");

// Registration route
async function registerUser(req, res) {
    try {
        // Extract user information from the request body
        const { username, email, password } = req.body;

        // Check if the email (username) is already taken
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email (Username) already taken" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user and save to MongoDB
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        // Handle errors and send a JSON response with the error message
        res.status(500).json({ error: error.message });
    }
}

// Login route
async function loginUser(req, res) {
    try {
        // Extract user credentials from the request body
        const { email, password } = req.body;

        // Check if the user with the given email exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Check if the provided password matches the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Store the token in Redis with a short expiration time (60 seconds)
        await redisClient.set('normalToken', token, { expiresIn: '60' });

        // Respond with the generated token
        res.status(200).json({ token });
    } catch (error) {
        // Handle errors and send a JSON response with the error message
        res.status(500).json({ error: error.message });
    }
}

// Export the functions for use in other parts of the application
module.exports = { registerUser, loginUser };
