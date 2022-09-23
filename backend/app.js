const express = require('express');
const connectDB = require('../config/db');
var cors = require('cors');

const app = express();

//Port
const port = process.env.PORT || 8082;

//Cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Hello world2!'));

//Connect Database
connectDB();
if (process.env.NODE_ENV === 'production') {
  // serve front-end client from build folder
  app.use(express.static(__dirname+'./../front-end/build'));
  app.get('*', (req, res) =>{
    res.sendFile(__dirname+'./../front-end/build/index.html')
  });
  
} else {
  app.get('/', (req, res) => res.send(`API running on port ${port}`));
}

app.listen(port, () => console.log(`Server running on port ${port}`));