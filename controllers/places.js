const { validationResult } = require('express-validator');
const { uuid } = require('uuidv4');
const HttpError = require('../models/http-error');

let TEMP_PLACES = [
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

const getPlaceById = (req, res, next) => {
  const placeId = req.params.id;
  const place = TEMP_PLACES.find((place) => {
    return place.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find place for the provided id.', 404);
  }

  res.status(200).json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.id;

  const places = TEMP_PLACES.filter((place) => {
    return place.creator === userId;
  });

  if (!places || places.length === 0) {
    return next(
      new HttpError('Could not find any places for the provided user id', 404)
    );
  }

  res.status(200).json({ places });
};

const createPlace = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Invalid inputs, please check your data', 422));
  }

  const { title, description, coordinates, address, creator } = req.body;

  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  TEMP_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

const updatePlaceById = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError('Invalid inputs, please check your entries', 422)
    );
  }

  const placeId = req.params.id;
  const { title, description } = req.body;

  const updatedPlace = { ...TEMP_PLACES.find((place) => place.id === placeId) };
  const placeIndex = TEMP_PLACES.findIndex((place) => place.id === placeId);
  updatedPlace.title = title;
  updatedPlace.description = description;

  TEMP_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.id;
  TEMP_PLACES = TEMP_PLACES.filter((place) => place.id !== placeId);

  res.status(200).json({ message: 'Deleted Place.' });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlace = deletePlace;
