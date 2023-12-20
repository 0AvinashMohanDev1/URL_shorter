// Import the Url model for MongoDB interaction
const Url = require("../models/Url");

// Array of characters for generating random short URLs
const abcd = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Function to generate a random short URL
function generateShortUrl() {
    return (
        abcd[Math.floor(Math.random() * abcd.length)] +
        abcd[Math.floor(Math.random() * abcd.length)] +
        abcd[Math.floor(Math.random() * abcd.length)]
    );
}

// Endpoint for creating a new short URL
async function createShortUrl(req, res) {
    try {
        // Extract the 'url' property from the request body
        const { url } = req.body;

        // Checking if the URL is already present in the MongoDB collection
        const existingUrl = await Url.findOne({ originalUrl: url });
        if (existingUrl) {
            return res.send(`URL is already present. Original URL: ${existingUrl.originalUrl}`);
        }

        // Creating a new short version of URL
        let shortUrl = generateShortUrl();

        // Create a new URL entry in the MongoDB collection
        await Url.create({ shortUrl, originalUrl: url });

        // Responding with a link to the shortened URL
        res.send(`<a href="http://localhost:3000/url/${shortUrl}">Shortened URL</a>`);
    } catch (error) {
        // Handling errors and sending a JSON response with the error message
        res.status(500).json({ error: error.message });
    }
}

// Endpoint for redirecting to the original URL using the short URL
async function redirectToOriginalUrl(req, res) {
    try {
        // Extract the 'link' parameter from the request URL
        let link = req.params.link;

        // Find the URL entry in the MongoDB collection using the short URL
        const urlEntry = await Url.findOne({ shortUrl: link });

        // Checking if the short URL is present in the MongoDB collection
        if (!urlEntry) {
            return res.send("URL is not present");
        }

        // Redirecting to the original URL
        res.redirect(urlEntry.originalUrl);
    } catch (error) {
        // Handling errors and sending a JSON response with the error message
        res.status(500).json({ error: error.message });
    }
}

// Exporting the functions for use in other parts of the application
module.exports = { createShortUrl, redirectToOriginalUrl };
