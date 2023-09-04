import express from "express";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../helpers/bcrypt-helper/bcryptHelper.js";
import {
  addNewAdminUser,
  updateAdminUser,
} from "../model/admin-user/adminUserModel.js";
import { verificationEmail } from "../helpers/email-helper/emailHelper.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    {
      /*
       * first we receive password
       * validate the email using uuidv4
       * hashing the password using bcryptjs
       * create and add new user in database
       * send user a verification link
       */
    }
    const { password } = req.body;
    req.body.emailValidateCode = uuidv4();
    req.body.password = hashPassword(password);

    const user = await addNewAdminUser(req.body);

    if (user?._id) {
      // send email
      res.json({
        status: "success",
        message:
          "User created, Please check your email to verify your account!",
        user,
      });
      // sending link to user
      const url = `${process.env.ROOT_DOMAIN}/admin-user/verify-email?c=${user.emailValidateCode}&e=${user.email}`;

      verificationEmail({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        url,
      });

      return;
    }
    res.json({
      status: "error",
      message: "Unable to create user, please try again later",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection:")) {
      error.status = 200;
      error.message =
        "There is already another user exist in this email, either reset password or use different email";
    }
    next(error);
  }
});

router.patch("/verify-email", async (req, res, next) => {
  try {
    const { emailValidateCode, email } = req.body;

    const user = await updateAdminUser(
      { emailValidateCode, email },
      { status: "active", emailValidateCode: "" }
    );

    user?._id
      ? res.json({
          status: "success",
          message: "Your account has been verified, please login to continue",
        }) && userVerifiedNotification(user)
      : res.json({
          status: "error",
          message: "Unable to verify your account, please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
