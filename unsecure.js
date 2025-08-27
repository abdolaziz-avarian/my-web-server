const express = require('express');
const path = require('path');
const validator = require('validator');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

let comments = [];  // Array to store comments

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_xss.html'));
});

// Endpoint to fetch comments
app.get('/comments', (req, res) => {
    res.json({ comments });
});

// Handle form submission without sanitization to simulate vulnerability
app.post('/submit-comment', (req, res) => {
    let { username, password, comment } = req.body;

    // Validate inputs (no sanitization for demonstration purposes)
    if (!validator.isLength(username, { min: 5 })) {
        return res.send('Username must be at least 5 characters long');
    }
    if (!validator.isLength(password, { min: 8 })) {
        return res.send('Password must be at least 8 characters long');
    }
    if (!/\d/.test(password)) {
        return res.send('Password must contain at least one digit');
    }

    // Add comment to the list without sanitization
    comments.push(comment);

    // Respond with the unsanitized comment
    res.send(`Username: ${username}, Password: ${password}, Comment: ${comment}`);
});

// Load SSL certificates
const options = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.crt'))
};

// Create HTTPS server
https.createServer(options, app).listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});