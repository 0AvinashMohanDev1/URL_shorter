# URL_sorter
URL Shortener and User Authentication

Overview
This project is a URL shortener with user authentication capabilities. It allows users to shorten long URLs and store them securely. Users can register, log in, and manage their shortened URLs.

Tech Stack
Node.js: A JavaScript runtime for executing server-side code.
Express.js: A web application framework for Node.js, simplifying the creation of web APIs.
MongoDB: A NoSQL database used for storing user and URL data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
Redis: An in-memory data structure store used for token storage.
JSON Web Token (JWT): A compact, URL-safe means of representing claims to be transferred between two parties.
Bcrypt: A password-hashing function for securely storing user passwords.
dotenv: A zero-dependency module for loading environment variables from a .env file.
Home URL
URL: http://localhost:3000/
Method: GET
Description: Home endpoint for the application.
User Registration
URL: http://localhost:3000/user/register
Method: POST
Description: Register a new user.
Request
json
Copy code
{
  "username": "avinash",
  "password": "avinash",
  "email": "avinash"
}
Save to grepper
Response
Status Code: 201
Body:
json
Copy code
{
  "message": "User registered successfully"
}
Save to grepper
User Login
URL: http://localhost:3000/user/login
Method: POST
Description: Authenticate and login a user.
Request
json
Copy code
{
  "email": "avinash",
  "password": "avinash"
}
Save to grepper
Response
Status Code: 200
Body:
json
Copy code
{
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
Save to grepper
Generate Short URL
URL: http://localhost:3000/url
Method: POST
Description: Create a new short URL.
Request
json
Copy code
{
  "url": "https://www.npmjs.com/package/bcrypt"
}
Save to grepper
Response
Status Code: 200
Body:
html
Copy code
<a href="http://localhost:3000/url/{short_url_name}">Shortened URL</a>
Save to grepper
Redirect to Shortened URL
URL: http://localhost:3000/url/{short_url_name}
Method: GET
Description: Redirect to the original URL associated with the provided short URL.
Response
Redirects to the original URL.
Test User
Use the following credentials for testing:

Username: avinash
Password: avinash
Email: avinash

after login use this {http://localhost:3000/url/ztr} for to be redirect to https://www.npmjs.com/package/bcrypt page