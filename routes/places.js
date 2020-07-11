const express = require('express');
const { check } = require('express-validator');

const placesControllers = require('../controllers/places');

const router = express.Router();

router.get('/:id', placesControllers.getPlaceById);

router.get('/user/:id', placesControllers.getPlacesByUserId);

router.post(
  '/',
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').not().isEmpty(),
  ],
  placesControllers.createPlace
);

router.patch(
  '/:id',
  [check('title').notEmpty(), check('description').isLength({ min: 5 })],
  placesControllers.updatePlaceById
);

router.delete('/:id', placesControllers.deletePlace);

module.exports = router;
