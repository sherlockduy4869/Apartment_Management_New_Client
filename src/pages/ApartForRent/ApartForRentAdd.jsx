import { useState, useEffect } from "react";

import { useStateContext } from "./../../contexts/ContextProvider";
import {
  addingApartForRent,
  getAllStaticValue,
} from "../../hooks/useApartForRent";
import { Form } from './components';

const ApartForRentAdd = () => {
  const { currentColor } = useStateContext();
  const [apartForRent, setApartForRent] = useState({
    apart_code: "",
    agency_name: "",
    agency_phone: "",
    agency_email: "",
    sqm: 0,
    house_owner: "",
    phone_owner: "",
    price: 0,
    email_owner: "",
    note: "",
  });

  const [areaApart, setAreaApart] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);
  const [statusFurniture, setStatusFurniture] = useState([]);

  const convertArray = ["sqm", "price"];

  const handleInput = (event) => {
    console.log();
    event.target
      ? setApartForRent({
          ...apartForRent,
          [event.target.name]: convertArray.includes(event.target.name)
            ? parseFloat(event.target.value.replace(",", ""))
            : event.target.value,
        })
      : setApartForRent({
          ...apartForRent,
          [event.value.split(" ")[0]]: event.label,
        });
  };

  const handleAddingApart = (event) => {
    event.preventDefault();
    addingApartForRent(apartForRent);
  };

  /* get apartment for rent list */
  useEffect(() => {
    const init = async () => {
      try {
        const allStaticValue = await getAllStaticValue();

        setAreaApart(allStaticValue.areaApart);
        setBedRoom(allStaticValue.bedRoom);
        setStatusFurniture(allStaticValue.statusFurniture);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <Form
    currentColor = {currentColor}
    areaApart = {areaApart}
    bedRoom = {bedRoom}
    statusFurniture = {statusFurniture}
    handleInput = {handleInput}
    handleAddingApart = {handleAddingApart}
    />
  );
};

export default ApartForRentAdd;
