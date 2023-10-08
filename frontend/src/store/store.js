import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  allUsersReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers-actions/users/userReducer";

const preloadedState = {
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
  },
  middleware: [thunk],
  preloadedState,
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import {
//   userLoginReducer,
//   userRegisterReducer,
//   allUsersReducer,
// } from "./reducers/userReducer";
// import { orderReducer } from "./reducers/orderReducer";
// import {
//   newProductReducer,
//   allProductsReducer,
//   updateProductReducer,
//   deleteProductReducer,
//   allBrandsReducer,
//   allCategoriesReducer,
// } from "./reducers/productReducer";

// const reducer = {
//   users: allUsersReducer,
//   userLogin: userLoginReducer,
//   userRegister: userRegisterReducer,
//   orders: orderReducer,
//   newProduct: newProductReducer,
//   allProducts: allProductsReducer,
//   updateProduct: updateProductReducer,
//   deleteProduct: deleteProductReducer,
//   allBrands: allBrandsReducer,
//   allCategories: allCategoriesReducer,
// };

// let initialState = {
//   userLogin: {
//     userInfo: sessionStorage.getItem("userInfo")
//       ? JSON.parse(sessionStorage.getItem("userInfo"))
//       : null,
//   },
// };

// const store = configureStore({
//   reducer: reducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//   devTools: process.env.NODE_ENV !== 'production',
//   preloadedState: initialState
// });

// export default store;
