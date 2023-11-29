import { toast } from "react-toastify";

import axios from "../services/axios";
import * as API from "../constants/apis";

export const editUserInfor = async (userInfor) => {
  try {
    const userProfile = JSON.parse(localStorage.getItem("user"));
    const userEmail = userProfile?.email;

    const response = await axios.put(
      API.REQUEST_EDIT_USER_INFOR + userEmail,
      userInfor
    );

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });
      toast.clearWaitingQueue();
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

export const editUserPassword = async (userInfor) => {
  try {
    const userProfile = JSON.parse(localStorage.getItem("user"));
    const userEmail = userProfile?.email;

    userInfor.email = userEmail;

    const response = await axios.put(API.REQUEST_CHANGE_PASSWORD, userInfor);

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });
      toast.clearWaitingQueue();
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

export const getUserByEmail = async () => {
  try {
    const userProfile = JSON.parse(localStorage.getItem("user"));
    const userEmail = userProfile?.email;
    const response = await axios.get(API.REQUEST_GET_USER_BY_EMAIL + userEmail);

    if (response.status === 200) {
      const user = response.data.data;
      return user;
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
