const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.post(
  '/signup',
  [
    check('email', 'Please enter a valid email').isEmail().normalizeEmail(),
    check('password', 'Please enter a valid password')
      .isLength({
        min: 3,
      })
      .custom((value, { req }) => {
        if (value !== req.body.confirmPassword) {
          // trow error if passwords do not match
          throw new Error("Passwords don't match!");
        }

        return value;
      }),
  ],
  (req, res) => {
    const { errors } = validationResult(req);

    if (errors) {
      return res.status(400).send({ errors });
    }

    return res.send({ message: 'success, b' });
  },
);

module.exports = router;
