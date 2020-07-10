const express = require('express');
const HttpError = require('../models/http-error');

const TEMP_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous buildings in the world',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th Street, New York, NY 10001',
    location: {
      lat: 40.748,
      lng: -73.987,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Chrysler Building',
    description: 'A famous artistic building in NYC',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Chrysler_Building_by_David_Shankbone_Retouched.jpg/800px-Chrysler_Building_by_David_Shankbone_Retouched.jpg',
    address: '12 E 49 Street, New York, NY 10001',
    location: {
      lat: 43.748,
      lng: -70.987,
    },
    creator: 'u2',
  },
];

const router = express.Router();

router.get('/:id', (req, res, next) => {
  const placeId = req.params.id;
  const place = TEMP_PLACES.find((place) => {
    return place.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find place for the provided id.', 404);
  }

  res.json({ place });
});

router.get('/user/:id', (req, res, next) => {
  const userId = req.params.id;

  const place = TEMP_PLACES.find((place) => {
    return place.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError('Could not find a place for the provided user id', 404)
    );
  }

  res.json({ place });
});

module.exports = router;
