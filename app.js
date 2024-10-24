// Load express module
const express = require('express');

// Create an express application
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hi this is a simple node js application by JAY');
});

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
