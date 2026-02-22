const { body } = require('express-validator');

const textField = (field, label) => body(field).trim().notEmpty().withMessage(`${label} is required`);

const serviceValidator = [
  textField('title', 'Title'),
  textField('summary', 'Summary'),
  textField('description', 'Description'),
  textField('icon', 'Icon')
];

const projectValidator = [
  textField('title', 'Title'),
  textField('category', 'Category'),
  textField('summary', 'Summary'),
  textField('description', 'Description')
];

const blogValidator = [
  textField('title', 'Title'),
  textField('excerpt', 'Excerpt'),
  textField('content', 'Content'),
  textField('author', 'Author')
];

const jobValidator = [
  textField('title', 'Title'),
  textField('location', 'Location'),
  textField('type', 'Type'),
  textField('description', 'Description')
];

const contactValidator = [
  textField('name', 'Name'),
  body('email').isEmail().withMessage('Valid email required'),
  textField('subject', 'Subject'),
  textField('message', 'Message')
];

module.exports = { serviceValidator, projectValidator, blogValidator, jobValidator, contactValidator };
