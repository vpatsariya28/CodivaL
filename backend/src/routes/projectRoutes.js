const express = require('express');
const { list, getOne, create, update, remove, buildSlugData } = require('../controllers/contentController');
const { projectValidator } = require('../validators/commonValidators');
const validate = require('../middleware/validate');
const { authenticate, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', list('project', (req) => ({ where: req.query.category ? { category: req.query.category } : {} })));
router.get('/:slug', getOne('project', (req) => ({ slug: req.params.slug })));
router.post('/', authenticate, authorize('ADMIN', 'EDITOR'), upload.single('image'), projectValidator, validate, create('project', (req) => ({
  ...buildSlugData(req.body),
  techStack: req.body.techStack ? req.body.techStack.split(',').map((t) => t.trim()) : [],
  imageUrl: req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl || null
})));
router.put('/:id', authenticate, authorize('ADMIN', 'EDITOR'), upload.single('image'), projectValidator, validate, update('project', (req) => ({ id: Number(req.params.id) }), (req) => ({
  ...buildSlugData(req.body),
  techStack: req.body.techStack ? req.body.techStack.split(',').map((t) => t.trim()) : [],
  imageUrl: req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl || null
})));
router.delete('/:id', authenticate, authorize('ADMIN'), remove('project', (req) => ({ id: Number(req.params.id) })));

module.exports = router;
