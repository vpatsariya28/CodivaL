const success = (res, data, message = 'Success') => res.json({ message, data });

const created = (res, data, message = 'Created') => res.status(201).json({ message, data });

const error = (res, message = 'Something went wrong', status = 500) =>
  res.status(status).json({ message });

module.exports = { success, created, error };
