import axios from "axios";

// const rootUrl = "http://localhost:8000/api/v1/";
const rootURL =
  process.env.NODE_ENV === "production"
    ? "https://fs-admin-cms-backend.vercel.app/"
    : "https://fs-admin-cms-backend.vercel.app/";

const categoryEndpoint = rootURL + "category";

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
