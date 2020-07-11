const { validationResult } = require('express-validator');
const { uuid } = require('uuidv4');
const HttpError = require('../models/http-error');

const TEMP_USERS = [
  {
    id: 'u1',
    name: 'Bob Cobb',
    email: 'bob@net.com',
    password: 'test123',
  },
  {
    id: 'u2',
    name: 'Hal Hope',
    email: 'hal@net.com',
    password: 'test123',
  },
];

const getUsers = (req, res, next) => {
  const users = TEMP_USERS;

  if (!users) {
    return next(new HttpError('Could not find users.', 404));
  }

  res.status(200).json({ users });
};

const login = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs, please check your data', 422));
  }

  const { email, password } = req.body;

  const identifiedUser = TEMP_USERS.find((user) => {
    return user.email === email;
  });

  if (!identifiedUser || identifiedUser.password !== password) {
    return next(
      new HttpError('Could not find a user, credentials are wrong.', 401)
    );
  }

  res.status(200).json({ message: 'Logged In!' });
};

const signup = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs, please check your data', 422));
  }

  const { name, email, password } = req.body;

  const hasUser = TEMP_USERS.find((user) => user.email === email);

  if (hasUser) {
    return next(
      new HttpError('Could not create new user, email already exists.', 422)
    );
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  TEMP_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
