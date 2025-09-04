// app.js
const express = require('express');
const { obj, userObj } = require('./renderObjects');
const app = express();
const port = 4000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a route that uses a variable
app.get('/', (req, res) => {
  // Render an EJS template, passing the variable
  res.render('index', userObj);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});