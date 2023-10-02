import Joi from "joi";

export const FIRSTNAME = Joi.string().max(20);
export const LASTNAME = Joi.string().max(20);
export const EMAIL = Joi.string().email({ minDomainSegments: 2 });
export const PASSWORD = Joi.string().min(8).max(20);
export const PHONE = Joi.string().min(10).max(10);
export const ADDRESS = Joi.string().max(100).allow("", null);
export const DATE = Joi.date().allow("", null);
export const STATUS = Joi.string().max(10);

export const SHORTSTR = Joi.string().max(50);
export const LONGSTR = Joi.string().max(10000);

export const SMALLNUMBER = Joi.number();

export const validator = (schema, req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    error.status = 200;
    return next(error);
  }

  next();
};
