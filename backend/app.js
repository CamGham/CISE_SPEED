const express = require('express');
const cors = require('cors');
const connectDB = require('../config/db');

const app = express();
//  routes
const articles = require('./routes/api/articles');

// Port
const port = process.env.PORT || 8082;

// Cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//  using route
app.use('/api/articles', articles);

// Connect Database
connectDB();
if (process.env.NODE_ENV === 'production') {
  // serve front-end client from build folder
  app.use(express.static(`${__dirname}./../frontend/build`));
  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}./../frontend/build/index.html`);
  });
} else {
  app.get('/', (req, res) => res.send(`API running on port ${port}`));
}

app.listen(port, () => console.log(`Server running on port ${port}`));
