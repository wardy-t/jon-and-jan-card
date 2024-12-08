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

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Home route
app.get('/', (req, res) => {
  const name = "John and Janet";  // Name of the birthday person
  const images = [
    '/images/A.jpg',
    '/images/D.jpg',
  ];

  const directoryPath = path.join(__dirname, 'public/images/slider');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }
    const sliderImages = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

  res.render('home', { name, images, sliderImages });
  });

});




