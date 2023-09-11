import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../pages/category/category-reducers/categorySlice";
import productReducer from "../pages/product/product-reducers/productSlice";
import { clientsReducer } from "../components/class-based/client-page/client-page-reducers/clientsReducer";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    payment: clientsReducer,
  },
});

export default store;
