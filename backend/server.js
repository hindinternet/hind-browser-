const express = require('express');
const app = express();
const port = 3000;

// Body parser
app.use(express.json());

// Import API routes
const healthRoute = require('../api/health');
const usersRoute = require('../api/users');

// Use routes
app.use('/api', healthRoute);
app.use('/api', usersRoute);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
