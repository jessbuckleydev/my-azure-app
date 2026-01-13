// 1. Load the Express library you installed
const express = require('express');

// 2. Initialize the Express application
const app = express();

// 3. Define the port. 
// Azure tells the app what port to use via process.env.PORT.
// Locally, it will default to 3000.
const port = process.env.PORT || 3000;

// 4. Tell the app to serve files from the "public" folder
app.use(express.static('public'));

// 5. Start the server
app.listen(port, () => {
    console.log(`Server is running! Check it out at http://localhost:${port}`);
});
