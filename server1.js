const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Hardcoded credentials for demonstration purposes
const validUsername = 'admin';
const validPassword = 'password123';

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_xss.html'));
});

// Handle form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the submitted username and password match the hardcoded credentials
    if (username === validUsername && password === validPassword) {
        res.send('Authentication successful!');
    } else {
        res.send('Authentication failed. Please check your username and password.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
