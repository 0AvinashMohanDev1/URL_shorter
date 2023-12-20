// Import the jsonwebtoken library for JWT handling
const jwt = require("jsonwebtoken");

// Import the Redis client for token retrieval
const { redisClient } = require("../Config/redis");

// Middleware to check if the user is authenticated
async function authenticateUser(req, res, next) {
    // Retrieve the token from Redis
    const token = await redisClient.get('normalToken');

    // Check if the token is present in the request
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Verify the token using the JWT_SECRET
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // Check for errors during token verification
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        // If verification is successful, attach the user information to the request
        req.user = user;

        // Continue to the next middleware or route
        next();
    });
}

// Export the middleware for use in other parts of the application
module.exports = authenticateUser;
