const express = require('express');
const { list, getOne, create, update, remove, buildSlugData } = require('../controllers/contentController');
const { serviceValidator } = require('../validators/commonValidators');
const validate = require('../middleware/validate');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', list('service', () => ({ orderBy: { order: 'asc' } })));
router.get('/:slug', getOne('service', (req) => ({ slug: req.params.slug })));
router.post('/', authenticate, authorize('ADMIN', 'EDITOR'), serviceValidator, validate, create('service', (req) => buildSlugData(req.body)));
router.put('/:id', authenticate, authorize('ADMIN', 'EDITOR'), serviceValidator, validate, update('service', (req) => ({ id: Number(req.params.id) }), (req) => buildSlugData(req.body)));
router.delete('/:id', authenticate, authorize('ADMIN'), remove('service', (req) => ({ id: Number(req.params.id) })));

module.exports = router;
