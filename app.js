const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', (req, res) => {
  const name = "Rachael";  // Name of the birthday person
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3"
  ];  // Sample images for demonstration
  res.render('home', { name, images });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});