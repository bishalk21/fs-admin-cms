import axios from "axios";

const rootURL = "http://localhost:8000/";
// const rootURL =
//   process.env.NODE_ENV === "production"
//     ? "https://fs-admin-cms-backend.vercel.app/"
//     : "https://fs-admin-cms-backend.vercel.app/";

const categoryEndpoint = rootURL + "api/v1/category";
const productEndpoint = rootURL + "api/v1/product";
const adminUserEndpoint = rootURL + "api/v1/admin-user";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postNewCategory = (data) => {
  const option = {
    method: "post",
    url: categoryEndpoint,
    data,
  };
  return apiProcessor(option);
};

export const fetchCategories = () => {
  const option = {
    method: "get",
    url: categoryEndpoint,
  };
  return apiProcessor(option);
};

export const deleteCategory = (_id) => {
  const option = {
    method: "delete",
    url: categoryEndpoint + "/" + _id,
  };
  return apiProcessor(option);
};

// products api ep
export const postNewProduct = (data) => {
  const option = {
    method: "post",
    url: productEndpoint,
    data,
  };
  return apiProcessor(option);
};

// admin user api
export const postNewAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEndpoint,
    data,
  };
  return apiProcessor(option);
};

// verify admin api
export const verifyNewAdminUser = (data) => {
  const option = {
    method: "patch",
    url: adminUserEndpoint + "/verify-email",
    data,
  };
  return apiProcessor(option);
};

// login admin user
export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: adminUserEndpoint + "/login",
    data,
  };
  return apiProcessor(option);
};

// get admin user
export const getAdminUser = (data) => {
  const option = {
    method: "get",
    url: adminUserEndpoint,
    data,
    isPrivate: true,
  };
  return apiProcessor(option);
};

// get All admin user
export const getAllAdminUser = () => {
  const option = {
    method: "get",
    url: adminUserEndpoint + "/all-admin",
    isPrivate: true,
  };
  return apiProcessor(option);
};
