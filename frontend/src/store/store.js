import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  allUsersReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers-actions/users/userReducer";
import {
  allBrandsReducer,
  allCategoriesReducer,
  allProductsReducer,
  deleteProductReducer,
  newProductReducer,
  updateProductReducer,
} from "./reducers-actions/products/productSlice";
import { orderReducer } from "./reducers-actions/orders/orderSlice";

let initialState = {
  userLogin: {
    userInfo: sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : null,
  },
};

const store = configureStore({
  reducer: {
    users: allUsersReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    orders: orderReducer,
    newProduct: newProductReducer,
    allProducts: allProductsReducer,
    updateProduct: updateProductReducer,
    deleteProduct: deleteProductReducer,
    allBrands: allBrandsReducer,
    allCategories: allCategoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  preloadedState: initialState,
});

export default store;
