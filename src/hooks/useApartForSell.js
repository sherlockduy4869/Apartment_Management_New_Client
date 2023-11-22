import { toast } from "react-toastify";

import axios from "../services/axios";
import * as API from "../constants/apis";
import * as ROUTES from "../constants/routes";

export const deleteApartForSell = async (apart_code) => {
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

export const fetchAllApartForSell = async () => {
  try {
    const response = await axios.get(API.REQUEST_GET_ALL_APART_FOR_SELL);
    if (response.status === 200) {
      const listApartForSell = response.data.data;
      return listApartForSell;
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

export const searchApartForSell = async (apartForSellList, search) => {
  try {
    const result = await apartForSellList.filter(
      (apartForSell) =>
        apartForSell.house_owner.toLowerCase().match(search.toLowerCase()) ||
        apartForSell.phone_owner.toLowerCase().match(search.toLowerCase()) ||
        apartForSell.area_apart.toLowerCase().match(search.toLowerCase()) ||
        apartForSell.apart_code.toLowerCase().match(search.toLowerCase()) ||
        apartForSell.agency_name.toLowerCase().match(search) ||
        apartForSell.bedroom.toLowerCase().match(search.toLowerCase()) ||
        apartForSell.sqm.toString().match(search.toLowerCase()) ||
        apartForSell.vnd_price.toString().match(search.toLowerCase()) ||
        apartForSell.usd_price.toString().match(search.toLowerCase()) ||
        apartForSell.created_at.toString().match(search.toLowerCase()) ||
        apartForSell.note.toLowerCase().match(search.toLowerCase())
    );

    return result;
  } catch (err) {
    toast.error("An error is happening !", {
      theme: "light",
    });
    toast.clearWaitingQueue();
  }
};

export const addingApartForSell = async (apartForSell, navigate) => {
  try {
    const response = await axios.post(
      API.REQUEST_ADDING_APART_FOR_SELL,
      apartForSell
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

export const editingApartForSell = async (
  apartForSell,
  apart_code,
  navigate
) => {
  try {
    const response = await axios.put(
      API.REQUEST_EDITING_APART_FOR_SELL + apart_code,
      apartForSell
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

export const getApartForSellDetails = async (apart_code) => {
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
