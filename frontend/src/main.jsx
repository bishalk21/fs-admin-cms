import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/loader/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </React.StrictMode>
  </Suspense>
);
