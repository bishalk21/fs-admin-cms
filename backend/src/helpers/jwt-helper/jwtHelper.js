import jwt from "jsonwebtoken";
import {
  deleteSession,
  insertSession,
} from "../../model/browser-session/SessionModel.js";
import { updateAdminUser } from "../../model/admin-user/adminUserModel.js";

{
  /**
   * Once the user logs in, the backend issues a short lived JWT (access token) and a long lived opaque token (refresh token).
   * Both of these are sent to the frontend via httpOnly and secure cookies.
   * The JWT is sent for each API call and is used to verify the session.
   * Once the JWT expires, the frontend uses the opaque token to get a new JWT and a new opaque token.
   * This is known as rotating refresh tokens.
   * The new JWT is used to make subsequent API calls and the session continues normally.
   */
}

export const signAccessJWT = async (payload) => {
  const accessJWT = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });

  const obj = {
    token: accessJWT,
    type: "jwt",
  };

  await insertSession(obj);
  return accessJWT;
};

export const signRefreshJWT = async (payload) => {
  const refreshJWT = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });

  await updateAdminUser(payload, { refreshJWT });
  return refreshJWT;
};

export const createJWTs = async (payload) => {
  // accessJWT
  const accessJWT = await signAccessJWT(payload);

  // refreshJWT
  const refreshJWT = await signRefreshJWT(payload);

  return { accessJWT, refreshJWT };
};

export const verifyAccessJWT = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  } catch ({ message }) {
    if (message === "jwt expired!") {
      // delete the jwt from session table
      await deleteSession({
        type: "jwt",
        token,
      });
    }
    return message;
  }
};
export const verifyRefreshJWT = async (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};
