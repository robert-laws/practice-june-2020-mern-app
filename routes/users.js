const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/signup',
  [
    check('name').notEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  usersController.signup
);

router.post(
  '/login',
  [check('email').isEmail(), check('password').notEmpty()],
  usersController.login
);

module.exports = router;
