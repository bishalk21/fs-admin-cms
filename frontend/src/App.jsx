import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { lazy } from "react";
const SignIn = lazy(() => import("./auth/Signin"));

function App() {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      <div className="w-full p-4 text-base font-bold text-center">
        Currently in progress
      </div>

      <Routes>
        <Route
          path="/auth/signin"
          element={userInfo == null && <SignIn />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
