const express = require('express');
const app = express();
const birthdayController = require('./controllers/birthdayController');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Define routes
app.get('/', birthdayController.showCard);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});