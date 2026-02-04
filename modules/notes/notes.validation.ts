import { body } from 'express-validator';

export const noteValidator = [
  body('title')
    .notEmpty()
    .withMessage('Title is required!')
    .isString()
    .trim(),
  body('content')
    .notEmpty()
    .withMessage('Content is required!')
    .isString()
    .trim(),
];
