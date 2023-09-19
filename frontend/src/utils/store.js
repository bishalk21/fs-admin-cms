import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../pages/category/category-reducers/categorySlice";
import productReducer from "../pages/product/product-reducers/productSlice";
import { clientsReducer } from "../components/class-based/client-page/client-page-reducers/clientsReducer";
import modalReducer from "./system-state/systemSlice";
import adminUserReducer from "../pages/admin-login/admin-reducer-action/adminUsersSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    payment: clientsReducer,
    modal: modalReducer,
    adminUsers: adminUserReducer,
  },
});

export default store;
