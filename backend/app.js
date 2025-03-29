const express = require('express');
const corsMiddleware = require('./middleware/cors');

const app = express();

// Apply CORS middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;