# Node.js Secure Web Server

This project is a simple Node.js web server built with Express. It serves a web page with a login form (and a comment field) and demonstrates **secure handling of user input**. The goal was to learn how to set up a basic web server and then improve it by addressing security issues like cross-site scripting (XSS) and using HTTPS for encryption.

## Features

- **Express Server:** Built using Express and listens on port 3000 by default.
- **Input Validation & Sanitization:** The form includes client-side validation and sanitization to prevent XSS.
- **Secure Communication (HTTPS):** Configured with HTTPS. Certificate and key are not included in repo (generate your own for local testing).
- **In-Memory Data Store:** Comments are stored in-memory for demonstration.

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Generate a self-signed certificate (`server.crt`) and private key (`server.key`) for HTTPS.

3. Start the server:

   ```bash
   npm start
   ```

   or

   ```bash
   node server_https.js
   ```

4. Open `https://localhost:3000` in your browser.

## Notes

- Self-signed certs will show a warning in the browser – bypass it for local testing.
- This project is for learning purposes, not production.
