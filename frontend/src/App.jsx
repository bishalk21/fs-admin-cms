import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { lazy } from "react";
const SignupOtpVerification = lazy(() =>
  import("./auth/SignupOtpVerification")
);
const SignIn = lazy(() => import("./auth/SignIn"));
const SignUp = lazy(() => import("./auth/SignUp"));

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      <div className="w-full p-4 text-base font-bold text-center">
        Currently in progress
      </div>

      <Routes>
        <Route path="/auth/signin" element={userInfo == null && <SignIn />} />
        <Route path="/auth/signup" element={userInfo == null && <SignUp />} />
        <Route
          path="/auth/signup/otp-verification/:email"
          element={userInfo == null && <SignupOtpVerification />}
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}

export default App;
