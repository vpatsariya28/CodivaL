const express = require('express');
const { list, getOne, create, update, remove, buildSlugData } = require('../controllers/contentController');
const { blogValidator } = require('../validators/commonValidators');
const validate = require('../middleware/validate');
const { authenticate, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', list('blogPost', (req) => ({ where: req.query.published === 'true' ? { published: true } : {}, orderBy: { createdAt: 'desc' } })));
router.get('/:slug', getOne('blogPost', (req) => ({ slug: req.params.slug })));
router.post('/', authenticate, authorize('ADMIN', 'EDITOR'), upload.single('coverImage'), blogValidator, validate, create('blogPost', (req) => ({
  ...buildSlugData(req.body),
  published: req.body.published === 'true' || req.body.published === true,
  coverImage: req.file ? `/uploads/${req.file.filename}` : req.body.coverImage || null
})));
router.put('/:id', authenticate, authorize('ADMIN', 'EDITOR'), upload.single('coverImage'), blogValidator, validate, update('blogPost', (req) => ({ id: Number(req.params.id) }), (req) => ({
  ...buildSlugData(req.body),
  published: req.body.published === 'true' || req.body.published === true,
  coverImage: req.file ? `/uploads/${req.file.filename}` : req.body.coverImage || null
})));
router.delete('/:id', authenticate, authorize('ADMIN'), remove('blogPost', (req) => ({ id: Number(req.params.id) })));

module.exports = router;
