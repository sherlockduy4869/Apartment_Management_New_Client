import { toast } from "react-toastify";

import axios from "../services/axios";
import * as API from "../constants/apis";
import * as ROUTES from "../constants/routes";

export const deleteApartUnderConstruction = async (apart_code) => {
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

export const fetchAllApartUnderConstruction = async () => {
  try {
    const response = await axios.get(API.REQUEST_GET_ALL_APART_UNDER_CONSTRUCTION);

    if (response.status === 200) {
      const listApartUnderConstruction = response.data.data;
      return listApartUnderConstruction;
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

export const searchApartUnderConstruction = async (apartUnderConstructionList, search) => {
  try {
    const result = await apartUnderConstructionList.filter(
      (apartUnderConstruction) =>
        apartUnderConstruction.apart_code.toLowerCase().match(search.toLowerCase()) ||
        apartUnderConstruction.agency_name.toLowerCase().match(search.toLowerCase()) ||
        apartUnderConstruction.area_apart.toLowerCase().match(search.toLowerCase()) ||
        apartUnderConstruction.house_owner.toLowerCase().match(search.toLowerCase()) ||
        apartUnderConstruction.phone_owner.toLowerCase().match(search) ||
        apartUnderConstruction.bedroom.toLowerCase().match(search.toLowerCase()) ||
        apartUnderConstruction.status_apart.toLowerCase().match(search.toLowerCase())
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

export const addingApartUnderConstruction = async (apartUnderConstruction, navigate) => {
  try {
    const response = await axios.post(
      API.REQUEST_ADDING_APART_UNDER_CONSTRUCTION,
      apartUnderConstruction
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

export const editingApartUnderConstruction = async (
  apartUnderConstruction,
  apart_code,
  navigate
) => {
  try {
    const response = await axios.put(
      API.REQUEST_EDITING_APART_UNDER_CONSTRUCTION + apart_code,
      apartUnderConstruction
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

export const getApartUnderConstructionDetails = async (apart_code) => {
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
