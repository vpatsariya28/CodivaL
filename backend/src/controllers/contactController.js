const prisma = require('../config/prisma');

const createMessage = async (req, res, next) => {
  try {
    const data = await prisma.contactMessage.create({ data: req.body });
    return res.status(201).json({ message: 'Message sent successfully', data });
  } catch (err) {
    return next(err);
  }
};

module.exports = { createMessage };
