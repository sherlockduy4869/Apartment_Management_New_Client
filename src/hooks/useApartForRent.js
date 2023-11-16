import { toast } from "react-toastify";

import axios from "../services/axios";
import * as API from "../constants/apis";

export const deleteApartForRent = async (apart_code) => {
  const response = await axios.delete(
    API.REQUEST_DELETING_APART_FOR_RENT + apart_code
  );

  if (response.status === 201) {
    return response.data.data;
  }
};

export const fetchAllApartForRent = async () => {
  const response = await axios.get(API.REQUEST_GET_ALL_APART_FOR_RENT);

  if (response.status === 200) {
    return response.data.data;
  }
};

export const searchApartForRent = async (apartForRentList, search) => {
  const result = await apartForRentList.filter(
    (apartForRent) =>
      apartForRent.apart_code.toLowerCase().match(search.toLowerCase()) ||
      apartForRent.agency_name.toLowerCase().match(search.toLowerCase()) ||
      apartForRent.area_apart.toLowerCase().match(search.toLowerCase()) ||
      apartForRent.house_owner.toLowerCase().match(search.toLowerCase()) ||
      apartForRent.phone_owner.toLowerCase().match(search) ||
      apartForRent.email_owner.toLowerCase().match(search.toLowerCase()) ||
      apartForRent.bedroom.toLowerCase().match(search.toLowerCase()) ||
      apartForRent.sqm.toString().match(search.toLowerCase()) ||
      apartForRent.status_furniture.toLowerCase().match(search.toLowerCase())
  );

  return result;
};

export const addingApartForRent = async (apartForRent) => {
  toast.warn("asdhgahsjdghj", {
    theme: "light",
  });

  // const response = await axios.post(
  //   API.REQUEST_ADDING_APART_FOR_RENT,
  //   apartForRent
  // );

  // if (response.status === 201) {
  //   return response.data.msg;
  // }
};

export const editingApartForRent = async (apartForRent, apart_code) => {
  const response = await axios.put(
    API.REQUEST_EDITING_APART_FOR_RENT + apart_code,
    apartForRent
  );

  if (response.status === 201) {
    return response.data.msg;
  }
};

export const getAllStaticValue = async () => {
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
};

export const getApartForRentDetails = async (apart_code) => {
  const response = await axios.get(
    API.REQUEST_GET_APART_FOR_RENT_DETAILS + apart_code
  );

  if (response.status === 200) {
    return response.data.data;
  }
};
