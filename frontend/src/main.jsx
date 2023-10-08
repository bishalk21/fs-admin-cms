import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Loader from "./layout/loader/Loader.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  </Suspense>
);
