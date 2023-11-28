import { toast } from "react-toastify";

import axios from "../services/axios";
import * as API from "../constants/apis";
import * as ROUTES from "../constants/routes";

export const deleteUser = async (email) => {
  try {
    const response = await axios.delete(
      API.REQUEST_DELETING_USER + email
    );

    if (response.status === 201) {
      const message = response.data.message;
      const email = response.data.data;

      toast.success(`${message}`, {
        theme: "light",
      });
      toast.clearWaitingQueue();

      return email;
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

export const searchUser = async (listUser, search) => {
  try {
    const result = await listUser.filter(
      (user) =>
        user.name.toLowerCase().match(search.toLowerCase()) ||
        user.email.toLowerCase().match(search.toLowerCase()) ||
        user.role.toLowerCase().match(search.toLowerCase())
    );

    return result;
  } catch (err) {
    toast.error("An error is happening !", {
      theme: "light",
    });
    toast.clearWaitingQueue();
  }
};

export const addingUser = async (userInfor, navigate) => {
  try {
    const response = await axios.post(API.REQUEST_ADDING_USER, userInfor);

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });
      toast.clearWaitingQueue();

      navigate(ROUTES.USER_LIST);
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

export const fetchAllUser = async () => {
  try {
    const response = await axios.get(API.REQUEST_GET_ALL_USER);

    if (response.status === 200) {
      const listUser = response.data.data;
      return listUser;
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

export const getAllStaticValue = async () => {
  try {
    const response = await axios.get(API.REQUEST_GET_ALL_STATIC_VALUE_USER);

    if (response.status === 200) {
      const allStaticValue = response.data.data;

      const role = [];

      for (const key in allStaticValue.Role) {
        role.push({
          label: allStaticValue.Role[key],
          value: `role ${key}`,
        });
      }

      return {
        role,
      };
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
