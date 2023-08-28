import productSchema from "./productSchema.js";

// add new product
export const addNewProduct = (product) => {
  return productSchema(product).save();
};

// read all the products
export const getAllProducts = () => {
  return productSchema.find();
};

// read or get product by _id
export const getProductByID = (_id) => {
  return productSchema.findById(_id);
};
