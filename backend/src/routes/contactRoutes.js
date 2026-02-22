const express = require('express');
const { createMessage } = require('../controllers/contactController');
const { list } = require('../controllers/contentController');
const { contactValidator } = require('../validators/commonValidators');
const validate = require('../middleware/validate');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', contactValidator, validate, createMessage);
router.get('/', authenticate, authorize('ADMIN', 'EDITOR'), list('contactMessage', () => ({ orderBy: { createdAt: 'desc' } })));

module.exports = router;
