const { body } = require('express-validator');

const loginValidator = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
];

module.exports = { loginValidator };
