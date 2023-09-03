import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload = [] }) => {
      state.productList = payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
