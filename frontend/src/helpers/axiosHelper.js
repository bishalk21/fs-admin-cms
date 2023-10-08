import fewaStoreApi from "../api/fewaStoreApi";

export const loginUserApi = async (email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await fewaStoreApi.post(
    "/auth/administrator/login",
    { email, password },
    config
  );
};

export const registerUserApi = async (name, email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await fewaStoreApi.post(
    "/auth/user/signup",
    { name, email, password },
    config
  );
};

export const fetchAllUsersApi = async (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return await fewaStoreApi.get("/admin/userlist", config);
};

// Add any other necessary API calls here.
