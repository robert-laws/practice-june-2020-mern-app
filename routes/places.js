const express = require('express');
const router = express.Router();
const placesControllers = require('../controllers/places');

router.get('/:id', placesControllers.getPlaceById);

router.get('/user/:id', placesControllers.getPlacesByUserId);

router.post('/', placesControllers.createPlace);

router.patch('/:id', placesControllers.updatePlaceById);

router.delete('/:id', placesControllers.deletePlace);

module.exports = router;
