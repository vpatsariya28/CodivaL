const express = require('express');
const { login } = require('../controllers/authController');
const { loginValidator } = require('../validators/authValidators');
const validate = require('../middleware/validate');

const router = express.Router();

router.post('/login', loginValidator, validate, login);

module.exports = router;
