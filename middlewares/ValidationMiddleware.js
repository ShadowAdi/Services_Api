const { body, validationResult } = require("express-validator");

const validateComicInput = [
  body("serviceName").notEmpty().withMessage("Service name is required"),
  body("price").notEmpty().withMessage("Number should be greater than 0"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateComicInput;
