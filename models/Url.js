const mongoose = require("mongoose");

// Define a URL schema
const urlSchema = new mongoose.Schema({
    shortUrl: String,
    originalUrl: String,
});

// Create a Url model
const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
