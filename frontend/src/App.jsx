import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { lazy, useEffect } from "react";
const Product = lazy(() => import("./pages/Product"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Sidebar = lazy(() => import("./components/sidebar/Sidebar"));
const Users = lazy(() => import("./pages/Users"));
const SignupOtpVerification = lazy(() =>
  import("./auth/SignupOtpVerification")
);
const SignIn = lazy(() => import("./auth/SignIn"));
const SignUp = lazy(() => import("./auth/SignUp"));

function App() {
  const { pathname } = useLocation();
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  //disable right click
  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  // window.addEventListener("keydown", (e) => {
  //   if (e.key === "F12") e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.key === "I") e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.key === "J") e.preventDefault();
  // });

  return (
    <>
      <div className="w-full p-4 text-base font-bold text-center">
        Currently in progress
      </div>

      {userInfo === null && <Sidebar />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Product />} />
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
