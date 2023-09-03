import axios from "axios";

const rootURL = "http://localhost:8000/";
// const rootURL =
//   process.env.NODE_ENV === "production"
//     ? "https://fs-admin-cms-backend.vercel.app/"
//     : "https://fs-admin-cms-backend.vercel.app/";

const categoryEndpoint = rootURL + "api/v1/category";
const productEndpoint = rootURL + "api/v1/product";

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
