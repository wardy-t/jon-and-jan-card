const express = require('express');
const app = express();
const path = require('path');

// Set up the view engine to use EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the birthday card page
app.get('/', (req, res) => {
  res.render('card', { name: "Rachael", images: ["path/to/your/image.jpg"] });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));