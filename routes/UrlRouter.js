const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authenticateUser");
const { createShortUrl, redirectToOriginalUrl } = require("../controllers/UrlController");

// Endpoint for creating a new short URL
router.post("/", authenticateUser, createShortUrl);

// Endpoint for redirecting to the original URL using the short URL
router.get("/:link", authenticateUser, redirectToOriginalUrl);

module.exports = router;
