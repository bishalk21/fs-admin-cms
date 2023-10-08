import fewaStoreApi from "./fewaStoreApi";

export const fetchAllProducts = async (config) => {
  return await fewaStoreApi.get(`/admin/get-all-products`, config);
};

export const createProduct = async (productData, config) => {
  return await fewaStoreApi.post("/admin/create-product", productData, config);
};

export const updateSpecificProduct = async (id, productData, config) => {
  return await fewaStoreApi.put(
    `/admin/update-product/${id}`,
    productData,
    config
  );
};

export const deleteSpecificProduct = async (id, config) => {
  return await fewaStoreApi.delete(`/admin/delete-product/${id}`, config);
};

export const fetchAllCategories = async (config) => {
  return await fewaStoreApi.get(`/admin/get-all-categories`, config);
};

export const fetchAllBrands = async (config) => {
  return await fewaStoreApi.get(`/admin/get-all-brands`, config);
};
