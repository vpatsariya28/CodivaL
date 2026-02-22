const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');
const { jwtSecret, jwtExpiresIn } = require('../config/env');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, jwtSecret, {
      expiresIn: jwtExpiresIn
    });

    return res.json({
      message: 'Login successful',
      data: { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } }
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { login };
