const prisma = require('../config/prisma');
const slugify = require('../utils/slugify');

const list = (model, query = {}) => async (req, res, next) => {
  try {
    const data = await prisma[model].findMany(query(req));
    return res.json({ data });
  } catch (err) {
    return next(err);
  }
};

const getOne = (model, whereBuilder) => async (req, res, next) => {
  try {
    const data = await prisma[model].findFirst({ where: whereBuilder(req) });
    if (!data) return res.status(404).json({ message: 'Not found' });
    return res.json({ data });
  } catch (err) {
    return next(err);
  }
};

const create = (model, dataBuilder) => async (req, res, next) => {
  try {
    const data = await prisma[model].create({ data: dataBuilder(req) });
    return res.status(201).json({ data });
  } catch (err) {
    return next(err);
  }
};

const update = (model, whereBuilder, dataBuilder) => async (req, res, next) => {
  try {
    const data = await prisma[model].update({ where: whereBuilder(req), data: dataBuilder(req) });
    return res.json({ data });
  } catch (err) {
    if (err.code === 'P2025') return res.status(404).json({ message: 'Not found' });
    return next(err);
  }
};

const remove = (model, whereBuilder) => async (req, res, next) => {
  try {
    await prisma[model].delete({ where: whereBuilder(req) });
    return res.json({ message: 'Deleted' });
  } catch (err) {
    if (err.code === 'P2025') return res.status(404).json({ message: 'Not found' });
    return next(err);
  }
};

const buildSlugData = (body, titleField = 'title') => ({
  ...body,
  slug: body.slug || slugify(body[titleField])
});

module.exports = { list, getOne, create, update, remove, buildSlugData };
