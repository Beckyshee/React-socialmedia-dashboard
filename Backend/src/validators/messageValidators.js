import Joi from "joi";

const messageSchema = Joi.object({

  SenderID: Joi.string().max(255).required(),
  ReceiverID: Joi.string().max(255).required(),
  MessageDate: Joi.date().default(new Date()),
  Content: Joi.string().allow("", null),
});

export const messageValidator = (message) => {
  return messageSchema.validate(message);
};
