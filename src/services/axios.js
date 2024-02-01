import axios from "axios";
import * as ROUTES from '../constants/routes';

const instance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

instance.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).accessToken
      : "";
    config.headers["Authorization"] = `Bearer ${jwtToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = ROUTES.LOGIN;
    }
    return Promise.reject(error);
  }
);

export default instance;
