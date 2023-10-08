import Axios from "axios";

export default Axios.create({
  baseURL: import.meta.env.VITE_APP_API_ENDPOINT,
});
