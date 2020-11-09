const express = require('express');
const cors = require('cors');

const app = express();

const posts = require('./routes/api/posts');
const connectDB = require('../db/index');

// Connect database
connectDB();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.use('/api/posts', posts);

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA 
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html')); 
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));