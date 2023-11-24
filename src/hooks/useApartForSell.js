import { toast } from "react-toastify";

import axios from "../services/axios";
import * as API from "../constants/apis";
import * as ROUTES from "../constants/routes";

export const deleteApart = async (apart_code) => {
  try {
    const response = await axios.delete(
      API.REQUEST_DELETING_APART_FOR_SELL + apart_code
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
    const response = await axios.get(API.REQUEST_GET_ALL_APART_FOR_SELL);
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
        apart.house_owner.toLowerCase().match(search.toLowerCase()) ||
        apart.phone_owner.toLowerCase().match(search.toLowerCase()) ||
        apart.area_apart.toLowerCase().match(search.toLowerCase()) ||
        apart.apart_code.toLowerCase().match(search.toLowerCase()) ||
        apart.agency_name.toLowerCase().match(search) ||
        apart.bedroom.toLowerCase().match(search.toLowerCase()) ||
        apart.sqm.toString().match(search.toLowerCase()) ||
        apart.vnd_price.toString().match(search.toLowerCase()) ||
        apart.usd_price.toString().match(search.toLowerCase()) ||
        apart.created_at.toString().match(search.toLowerCase()) ||
        apart.note.toLowerCase().match(search.toLowerCase())
    );

    return result;
  } catch (err) {
    toast.error("An error is happening !", {
      theme: "light",
    });
    toast.clearWaitingQueue();
  }
};

export const addingApart = async (apartInfor, navigate) => {
  try {
    const response = await axios.post(
      API.REQUEST_ADDING_APART_FOR_SELL,
      apartInfor
    );

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });
      toast.clearWaitingQueue();

      navigate(ROUTES.APART_FOR_SELL);
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

export const editingApart = async (
  apartInfor,
  apart_code,
  navigate
) => {
  try {
    const response = await axios.put(
      API.REQUEST_EDITING_APART_FOR_SELL + apart_code,
      apartInfor
    );

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });

      navigate(ROUTES.APART_FOR_SELL);
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
    const response = await axios.get(
      API.REQUEST_GET_ALL_STATIC_VALUE_APART_FOR_RENT
    );

    if (response.status === 200) {
      const allStaticValue = response.data.data;

      const bedRoom = [];
      const areaApart = [];
      const statusFurniture = [];

      for (const key in allStaticValue.StatusFurniture) {
        statusFurniture.push({
          label: allStaticValue.StatusFurniture[key],
          value: `status_furniture ${key}`,
        });
      }

      for (const key in allStaticValue.BedRoom) {
        bedRoom.push({
          label: allStaticValue.BedRoom[key],
          value: `bedroom ${key}`,
        });
      }

      for (const key in allStaticValue.AreaApart) {
        areaApart.push({
          label: allStaticValue.AreaApart[key],
          value: `area_apart ${key}`,
        });
      }

      return {
        bedRoom,
        areaApart,
        statusFurniture,
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

export const getApartDetails = async (apart_code) => {
  try {
    const response = await axios.get(
      API.REQUEST_GET_APART_FOR_SELL_DETAILS + apart_code
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
