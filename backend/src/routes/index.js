const express = require('express');
const authRoutes = require('./authRoutes');
const serviceRoutes = require('./serviceRoutes');
const projectRoutes = require('./projectRoutes');
const blogRoutes = require('./blogRoutes');
const jobRoutes = require('./jobRoutes');
const contactRoutes = require('./contactRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/services', serviceRoutes);
router.use('/projects', projectRoutes);
router.use('/blogs', blogRoutes);
router.use('/jobs', jobRoutes);
router.use('/contacts', contactRoutes);

module.exports = router;
