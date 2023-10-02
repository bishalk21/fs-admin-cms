import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  comparePassword,
  hashPassword,
} from "../helpers/bcrypt-helper/bcryptHelper.js";
import {
  addNewAdminUser,
  findOneUser,
  getAllAdminUsers,
  updateAdminUser,
} from "../model/admin-user/adminUserModel.js";
import {
  userVerifiedNotification,
  verificationEmail,
} from "../helpers/email-helper/emailHelper.js";
import {
  emailVerificationValidation,
  newAdminUserValidation,
} from "../validation/joi-validation/AdminUserValidation.js";
import {
  createJWTs,
  signAccessJWT,
  verifyRefreshJWT,
} from "../helpers/jwt-helper/jwtHelper.js";
const router = express.Router();

// fetch user
router.get("/", (req, res, next) => {
  try {
    const user = req.adminInfo;
    user.password = undefined;
    user.refreshJWT = undefined;

    res.json({
      status: "success",
      message: "User fetched",
      user,
    });
  } catch (error) {
    next(error);
  }
});

{
  /**
   * 1. user requested to be new user, make post call with details
   * 2. generate emailValidate code for user and store in db along with other details
   * 3. hash password
   * 4. send verification link to the client with emailValidate code and client email in url
   * 5. on click of that email, client status is active and validation code is cleared
   */
}

// new admin user register
router.post("/", newAdminUserValidation, async (req, res, next) => {
  try {
    {
      /*
       * first validate the user details - new
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

// all admin users
router.get("/", async (req, res, next) => {
  try {
    const result = await getAllAdminUsers(req.body);
  } catch (error) {
    next(error);
  }
});

// verify new admin user
router.patch(
  "/verify-email",
  emailVerificationValidation,
  async (req, res, next) => {
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
  }
);

// login user
router.post("/login", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { password, email } = req.body;

    // find if user exists on given email
    const user = await findOneUser({ email });

    // if user exists
    if (user?._id) {
      // status is not active
      if (user?.status !== "active") {
        res.json({
          status: "error",
          message:
            "Your account is not verified, please check your email to verify your account",
        });
      }

      // we need to verify if the password send by user and the hashed password stored in db is same
      const isPasswordMatch = comparePassword(password, user.password);

      // if password is matched
      if (isPasswordMatch) {
        // not sending password
        user.password = undefined;

        // before login success, we need to have jwt
        const jwts = await createJWTs({ email });

        return res.json({
          status: "success",
          message: "Login successful",
          user,
          ...jwts,
        });
      }
    }
    // if user not found or password not matched
    res.json({
      status: "error",
      message: "Invalid email or password",
    });
  } catch (error) {
    next(error);
  }
});

// generate new accessJWT and send back to client
router.get("/accessjwt", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // console.log(authorization);

    if (authorization) {
      // 1. verify the token
      const decoded = await verifyRefreshJWT(authorization);
      //   console.log(decoded);÷frodf

      // 2. check if exist in db
      if (decoded.email) {
        const user = await findOneUser({ email: decoded.email });
        // 3. create new accessJWT and return
        if (user?._id) {
          //   const accessJWT = await signAccessJWT({ email: decoded.email });
          return res.json({
            status: "success",
            message: "Access token generated",
            accessJWT: await signAccessJWT({ email: decoded.email }),
          });
        }
      }
    }

    res.status(401).json({
      status: "error",
      message: "Unauthenticated",
    });
  } catch (error) {
    error.status = 401;
    next(error);
  }
});

export default router;
