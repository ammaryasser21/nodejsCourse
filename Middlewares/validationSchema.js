const Joi = require("joi");

const courseSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.number().positive().required(),
});

module.exports = courseSchema;
