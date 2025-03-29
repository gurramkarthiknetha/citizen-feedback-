const exp = require('express');
const app = exp();
const path = require('path');
require('dotenv').config(); 
const mongoose = require('mongoose');
const cors = require('cors');

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Configure CORS - update with specific origin
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
}));

// Serve static files for uploaded images
app.use('/uploads', exp.static(path.join(__dirname, 'uploads')));

// Import routes instead of models
const adminRoutes = require('./routes/admin');
const officerRoutes = require('./routes/officer');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const port = process.env.PORT || 4000;

// Function to find an available port
const startServer = async (initialPort) => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("DB connected Successfully");

    const server = app.listen(initialPort, () => {
      console.log(`Server running on port ${initialPort}`);
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${initialPort} is busy, trying ${initialPort + 1}`);
        startServer(initialPort + 1);
      } else {
        console.error('Server error:', err);
      }
    });
  } catch (e) {
    console.log("Error in connecting to DB: ", e);
  }
};

// body parser - increase limit for file uploads
app.use(exp.json({ limit: '50mb' }));
app.use(exp.urlencoded({ extended: true, limit: '50mb' }));

// Use route middlewares
app.use('/admin', adminRoutes);
app.use('/officer', officerRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes);

// error handler
app.use((err, req, res, next) => {
    console.error("Error occurred:", err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
});

startServer(port);