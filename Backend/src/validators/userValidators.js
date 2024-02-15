// userValidator.js

import Joi from "joi";

const userSchema = Joi.object({
  Username: Joi.string().min(3).max(255).required(),
  Password: Joi.string().min(6).max(255).required(),
  Email: Joi.string().email().max(255).required(),
  TagName: Joi.string().max(50).allow("", null),
  Location: Joi.string().max(100).allow("", null),
});

export const userValidator = (user) => {
  return userSchema.validate(user);
};


export const userLoginValidator = (user) => {
    const userValidatorSchema = joi.object({
      Username: Joi.string().min(3).max(255).required(),
      Password: Joi.string().min(6).max(255).required(),
    });
  return userValidatorSchema.validate(user);
};
