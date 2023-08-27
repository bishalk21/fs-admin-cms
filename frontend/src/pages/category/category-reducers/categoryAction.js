import {
  deleteCategory,
  fetchCategories,
  postNewCategory,
} from "../../../helper/axiosHelper";
import { setCategories } from "./categorySlice";

export const fetchCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategories();
  status === "success" && dispatch(setCategories(categories));
};

export const postNewCategoryAction = (data) => async (dispatch) => {
  const { status } = await postNewCategory(data);
  status === "success" && dispatch(fetchCategoriesAction());
};

export const deleteCategoryAction = (data) => async (dispatch) => {
  const { status } = await deleteCategory(data);
  status === "success" && dispatch(fetchCategoriesAction());
};
