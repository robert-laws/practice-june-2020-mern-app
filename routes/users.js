const express = require('express');
const HttpError = require('../models/http-error');

const TEMP_USERS = [
  {
    id: 'u1',
    name: 'Bob Cobb',
    image:
      'https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?cs=srgb&dl=photo-of-grass-field-1227513.jpg&fm=jpg',
    placeCount: 4,
  },
  {
    id: 'u2',
    name: 'Hal Hope',
    image:
      'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?cs=srgb&dl=photo-lavender-flower-field-under-pink-sky-1166209.jpg&fm=jpg',
    placeCount: 8,
  },
];

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const userId = req.params.id;
  const user = TEMP_USERS.find((user) => {
    return user.id === userId;
  });

  if (!user) {
    return next(
      new HttpError('Could not find a user for the provided id.', 404)
    );
  }

  res.json({ user });
});

module.exports = router;
