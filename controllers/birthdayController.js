const path = require('path');

exports.showCard = (req, res) => {
  const images = ["/images/birthday1.jpg", "/images/birthday2.jpg"]; // Example images
  res.render('card', { name: 'Rachael', images: images });
};