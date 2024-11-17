const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const fs = require('fs');

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', (req, res) => {
  const name = "Rachael";  // Name of the birthday person
  const images = [
    '/images/B.jpg',
    '/images/A.jpg',
    '/images/D.jpg', 
    '/images/H.jpg', 
    '/images/T.jpg', 
    '/images/R.jpg', 
    '/images/Z.jpg', 
  ];
  res.render('home', { name, images });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



