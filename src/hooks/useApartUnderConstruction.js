import { toast } from "react-toastify";

import axios from "../services/axios";
import * as API from "../constants/apis";
import * as ROUTES from "../constants/routes";

export const deleteApart = async (apart_code) => {
  try {
    const response = await axios.delete(
      API.REQUEST_DELETING_APART_UNDER_CONSTRUCTION + apart_code
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
    const response = await axios.get(API.REQUEST_GET_ALL_APART_UNDER_CONSTRUCTION);

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
        apart.bedroom.toLowerCase().match(search.toLowerCase()) ||
        apart.status_apart.toLowerCase().match(search.toLowerCase())
    );

    return result;
  } catch (err) {
    console.log(err)
    toast.error("An error is happening !", {
      theme: "light",
    });
    toast.clearWaitingQueue();
  }
};

export const addingApart = async (apartInfor, navigate) => {
  try {
    const response = await axios.post(
      API.REQUEST_ADDING_APART_UNDER_CONSTRUCTION,
      apartInfor
    );

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });
      toast.clearWaitingQueue();

      navigate(ROUTES.APART_UNDER_CONSTRUCTION);
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
      API.REQUEST_EDITING_APART_UNDER_CONSTRUCTION + apart_code,
      apartInfor
    );

    if (response.status === 201) {
      const message = response.data.message;

      toast.success(`${message}`, {
        theme: "light",
      });

      navigate(ROUTES.APART_UNDER_CONSTRUCTION);
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
      API.REQUEST_GET_ALL_STATIC_VALUE_APART_UNDER_CONSTRUCTION
    );

    if (response.status === 200) {
      const allStaticValue = response.data.data;

      const bedRoom = [];
      const areaApart = [];
      const statusApart = [];

      for (const key in allStaticValue.StatusApartUnderConstruction) {
        statusApart.push({
          label: allStaticValue.StatusApartUnderConstruction[key],
          value: `status_apart ${key}`,
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
        statusApart,
      };
    }
  } catch (err) {
    console.log(err);
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
      API.REQUEST_GET_APART_UNDER_CONSTRUCTION_DETAILS + apart_code
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
