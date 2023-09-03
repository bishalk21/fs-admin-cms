import { postNewProduct } from "../../../helper/axiosHelper";

export const postNewProductAction = (data) => async (dispatch) => {
  const { status } = await postNewProduct(data);
};
