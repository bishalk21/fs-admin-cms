import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>
);
