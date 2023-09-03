import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../pages/category/category-reducers/categorySlice";
import productReducer from "../pages/product/product-reducers/productSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;
