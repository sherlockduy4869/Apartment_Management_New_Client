import axios from "../services/axios";
import { toast } from "react-toastify";
import * as API from "../constants";

export const login = async (account) => {
  const response = await axios.post(API.REQUEST_LOGIN, account);

  if (response.status === 201) {
    const user = response.data.user;
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  }
};
