import axios from "axios";

const fewaStoreApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.VITE_APP_API_ENDPOINT
      : "http://localhost:3300",
});

export default fewaStoreApi;
