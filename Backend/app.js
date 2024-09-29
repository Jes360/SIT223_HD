const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books'); // Adjust the path if necessary

const app = express();
app.use(cors()); // This will allow all domains, adjust as necessary for security
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://host.docker.internal:27017/bookReviewDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));



// Use bookRoutes for any requests to '/api/books'
app.use('/api/books', bookRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
