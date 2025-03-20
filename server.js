const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const studentRoutes = require('./routes/studentRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', studentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.error('MongoDB Connection Failed:', err.message);
    process.exit(1);
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
