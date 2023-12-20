# URL Shortener and User Authentication

## Overview
This project is a URL shortener with user authentication capabilities. It allows users to shorten long URLs and store them securely. Users can register, log in, and manage their shortened URLs.

## Tech Stack
- **Node.js:** A JavaScript runtime for executing server-side code.
- **Express.js:** A web application framework for Node.js, simplifying the creation of web APIs.
- **MongoDB:** A NoSQL database used for storing user and URL data.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Redis:** An in-memory data structure store used for token storage.
- **JSON Web Token (JWT):** A compact, URL-safe means of representing claims to be transferred between two parties.
- **Bcrypt:** A password-hashing function for securely storing user passwords.
- **dotenv:** A zero-dependency module for loading environment variables from a .env file.

## Endpoints

### User Registration
- **URL:** [https://urlshorter-c1o0.onrender.com/user/register]
- **Method:** POST
- **Description:** Register a new user.

#### Request
```json
{
  "username": "avinash",
  "password": "avinash",
  "email": "avinash"
}
Response:
Status Code: 201
Body:
{
  "message": "User registered successfully"
}
User Login
**URL:** [https://urlshorter-c1o0.onrender.com/user/login]
Method: POST
Description: Authenticate and login a user.
#### Request
{
  "email": "avinash",
  "password": "avinash"
}
Response
Status Code: 200
Body:
{
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
#### Generate Short URL
URL: [https://urlshorter-c1o0.onrender.com/url]
Method: POST
Description: Create a new short URL.
#### Request
{
  "url": "https://www.npmjs.com/package/bcrypt"
}
Response
Status Code: 200
Body:
<a href="https://urlshorter-c1o0.onrender.com/url{short_url_name}">Shortened URL</a>
Redirect to Shortened URL
URL: https://urlshorter-c1o0.onrender.com/url/{short_url_name}
example: [https://urlshorter-c1o0.onrender.com/url/ztr]
Method: GET
Description: Redirect to the original URL associated with the provided short URL.
Response
Redirects to the original URL.
Test User
Use the following credentials for testing:

Username: avinash
Password: avinash
Email: avinash
After login, use this http://localhost:3000/url/ztr to be redirected to the bcrypt page.
