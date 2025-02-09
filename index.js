const express = require('express');
const { dbConnection } = require('./config/config');
const routes = require('./routes');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json()); // Voor JSON-verwerking

// Routes
app.use('/api', routes);

// Start server
dbConnection();
app.listen(PORT, () => console.log(`🚀 Server gestart op poort ${PORT}`));
