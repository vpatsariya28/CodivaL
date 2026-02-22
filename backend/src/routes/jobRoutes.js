const express = require('express');
const { list, create, update, remove } = require('../controllers/contentController');
const { jobValidator } = require('../validators/commonValidators');
const validate = require('../middleware/validate');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', list('jobOpening', (req) => ({ where: req.query.open === 'true' ? { isOpen: true } : {}, orderBy: { createdAt: 'desc' } })));
router.post('/', authenticate, authorize('ADMIN', 'EDITOR'), jobValidator, validate, create('jobOpening', (req) => ({ ...req.body, isOpen: req.body.isOpen !== 'false' })));
router.put('/:id', authenticate, authorize('ADMIN', 'EDITOR'), jobValidator, validate, update('jobOpening', (req) => ({ id: Number(req.params.id) }), (req) => ({ ...req.body, isOpen: req.body.isOpen !== 'false' })));
router.delete('/:id', authenticate, authorize('ADMIN'), remove('jobOpening', (req) => ({ id: Number(req.params.id) })));

module.exports = router;
