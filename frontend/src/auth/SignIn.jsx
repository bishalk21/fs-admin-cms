import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearErrors,
  login,
} from "../store/reducers-actions/users/usersAction";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, userInfo } = useSelector((state) => state.userLogin);

  const redirectPath =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/";

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (userInfo !== null) {
      navigate(redirectPath, { replace: true });
    }
  }, [dispatch, error, userInfo, redirectPath, navigate]);

  const SignInHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      <div className="container min-h-full flex items-center h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="inner-container max-w-md w-full space-y-6">
          <div className="header flex-col justify-center items-center">
            <h1 className="title text-6xl text-center font-bold text-indigo-600">
              Fewa Store
            </h1>
            <h2 className="sub-title mt-4 text-center text-2xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="form space-y-4" onSubmit={SignInHandler}>
            <div className="rounded-md  input-group space-y-2">
              <div className="email">
                <label htmlFor="email-address" className="label">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none input relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="try: carkeybeekey@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                  className="appearance-none input relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password: Asdfgh12$"
                />
              </div>
              <div className="terms flex items-center justify-between">
                <div className="terms-text font-light text-sm  ">
                  By continuing,&nbsp; you agree to Fewa Store's &nbsp;
                  <Link className="terms-link text-indigo-500" to="/">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link className="privacy-link text-indigo-600" to="/">
                    Privacy Policy
                  </Link>
                  .
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="button group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="icon absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            <div className="additional-links flex items-center justify-between leading-6">
              <div className="signup-link text-base font-medium">
                <Link className="text-indigo-500" to="/auth/signup">
                  Create an Account
                </Link>{" "}
              </div>
              <div className="forgot-password-link text-base font-medium">
                <Link className="text-indigo-600" to="/">
                  Forgot password ?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
