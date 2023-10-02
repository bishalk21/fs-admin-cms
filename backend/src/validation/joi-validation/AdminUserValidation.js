import Joi from "joi";
import {
  ADDRESS,
  DATE,
  EMAIL,
  FIRSTNAME,
  LASTNAME,
  LONGSTR,
  PASSWORD,
  PHONE,
  validator,
} from "../constant.js";

// email validation
export const emailVerificationValidation = (req, res, next) => {
  const schema = Joi.object({
    email: EMAIL,
    emailValidateCode: LONGSTR.required(),
  });

  validator(schema, res, req, next);
};

// new admin user validation
export const newAdminUserValidation = (req, res, next) => {
  const schema = Joi.object({
    firstName: FIRSTNAME.required(),
    lastName: LASTNAME.required(),
    email: EMAIL.required(),
    password: PASSWORD.required(),
    phone: PHONE.required(),
    address: ADDRESS,
    dob: DATE,
  });

  validator(schema, req, res, next);
};
