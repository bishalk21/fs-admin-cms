import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../pages/category/category-reducers/categorySlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
