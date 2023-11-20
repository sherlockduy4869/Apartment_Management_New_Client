import axios from "../services/axios";
import * as jwt from "jsonwebtoken";
import { toast } from "react-toastify";
import * as API from "../constants";

export const login = async (account) => {
  try {
    const response = await axios.post(API.REQUEST_LOGIN, account);
    if (response.status === 201) {
      const user = response?.data?.user;
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
  } catch (err) {
    const message = Array.isArray(err.response?.data?.message)
      ? err.response?.data?.message[0]
      : err.response?.data?.message;
    toast.error(`${message}`, {
      theme: "light",
    });
    toast.clearWaitingQueue();
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(API.REQUEST_LOGOUT);
    if (response.status === 201) {
      localStorage.removeItem("user");
      return true;
    }
  } catch (err) {
    toast.error("Has an error when Logout !", {
      theme: "light",
    });
    toast.clearWaitingQueue();
  }
};

export const isTokenNotExpired = (token) => {
  try {
    const decoded = jwt.decode(token);

    if (decoded.exp < Date.now() / 1000) {
      return false;
    }
    return true;
  } catch (error) {
    toast.error("An error is happening !", {
      theme: "light",
    });
    toast.clearWaitingQueue();
    return false;
  }
};
