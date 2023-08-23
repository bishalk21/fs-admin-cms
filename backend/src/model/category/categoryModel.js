import CategorySchema from "./categorySchema.js";

export const addCategory = (category) => {
  return CategorySchema(category).save();
};

export const getCategories = () => {
  return CategorySchema.find();
};
