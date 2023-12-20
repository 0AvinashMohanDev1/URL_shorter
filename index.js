// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config();

// Create an Express application
const app = express();

// Define the port for the server to listen on
const port = 3000;

// Enable JSON request body parsing middleware
app.use(express.json());

// Import database connection configuration
const { connection } = require("./Config/db");

// Import routers for handling different routes
const urlRouter = require("./routes/UrlRouter");
const userRouter = require("./routes/UserRouter");

// Use routers for specific routes
app.use("/url", urlRouter); // URL-related routes
app.use("/user", userRouter); // User-related routes

// Start the server and listen on the specified port
app.listen(port, async (req, res) => {
    try {
        // Connect to the MongoDB database
        await connection;

        // Log a message indicating that the server is running
        console.log(`Server running at http://localhost:${port}`);
    } catch (error) {
        // Log any errors that occur during server startup
        console.log({ error: error.message });
    }
});
