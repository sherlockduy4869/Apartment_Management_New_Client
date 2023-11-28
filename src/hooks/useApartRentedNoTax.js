import { toast } from "react-toastify";

import axios from "../services/axios";
import * as API from "../constants/apis";
import * as ROUTES from "../constants/routes";
import { getReversedDate, formatDate } from "../helpers/function";

export const deleteApart = async (apart_code) => {
  try {
    const response = await axios.delete(
      API.REQUEST_DELETING_APART_RENTED_NO_TAX + apart_code
    );

    if (response.status === 201) {
      const message = response.data.message;
      const apartCode = response.data.data;

      toast.success(`${message}`, {
        theme: "light",
      });
      toast.clearWaitingQueue();

      return apartCode;
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

export const fetchAllApart = async () => {
  try {
    const response = await axios.get(API.REQUEST_GET_ALL_APART_RENTED_NO_TAX);
    if (response.status === 200) {
      const listApart = response.data.data;
      return listApart;
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

export const searchApart = async (apartList, search) => {
  try {
    const result = await apartList.filter(
      (apart) =>
        apart.apart_code.toLowerCase().match(search.toLowerCase()) ||
        apart.agency_name.toLowerCase().match(search.toLowerCase()) ||
        apart.area_apart.toLowerCase().match(search.toLowerCase()) ||
        apart.house_owner.toLowerCase().match(search.toLowerCase()) ||
        apart.phone_owner.toLowerCase().match(search) ||
        apart.email_owner.toLowerCase().match(search.toLowerCase()) ||
        apart.fee_per_month.toString().match(search.toLowerCase()) ||
        apart.owner_recieved.toString().match(search.toLowerCase()) ||
        formatDate(apart.start_date).match(search.toLowerCase()) ||
        formatDate(apart.end_date).match(search.toLowerCase())
    );

    return result;
  } catch (err) {
    console.log(err);
    toast.error("An error is happening !", {
      theme: "light",
    });
    toast.clearWaitingQueue();
  }
};

export const addingApart = async (apartInfor, navigate) => {
  try {

    apartInfor.start_date = getReversedDate(apartInfor.start_date);
    apartInfor.end_date = getReversedDate(apartInfor.end_date);

    const response = await axios.post(
      API.REQUEST_ADDING_APART_RENTED_NO_TAX,
      apartInfor
    );

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });
      toast.clearWaitingQueue();

      navigate(ROUTES.APART_RENTED_NO_TAX);
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

export const editingApart = async (apartInfor, apart_code, navigate) => {
  try {

    apartInfor.start_date = getReversedDate(apartInfor.start_date);
    apartInfor.end_date = getReversedDate(apartInfor.end_date);

    const response = await axios.put(
      API.REQUEST_EDITING_APART_RENTED_NO_TAX + apart_code,
      apartInfor
    );

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });

      navigate(ROUTES.APART_RENTED_NO_TAX);
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

export const getApartDetails = async (apart_code) => {
  try {
    const response = await axios.get(
      API.REQUEST_GET_APART_RENTED_NO_TAX_DETAILS + apart_code
    );

    if (response.status === 200) {
      return response.data.data;
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

export const getApartDetailsEditing = async (apart_code) => {
  try {
    const response = await axios.get(
      API.REQUEST_GET_APART_RENTED_NO_TAX_DETAILS_EDITING + apart_code
    );

    if (response.status === 200) {
      const apartInfor = response.data.data;
      apartInfor.start_date = formatDate(apartInfor.start_date);
      apartInfor.end_date = formatDate(apartInfor.end_date);
      return response.data.data;
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
