exports.showHomePage = (req, res) => {
    const images = [
      '/images/photo1.jpg',
      '/images/photo2.jpg', // Add more images as needed
    ];
    res.render('home', { name: 'Rachael', images: images });
  };