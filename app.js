const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places');
const usersRoutes = require('./routes/users');

const app = express();

app.use('/api/places', placesRoutes);

app.use('/api/users', usersRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
