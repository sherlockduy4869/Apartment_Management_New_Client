import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "./../../contexts/ContextProvider";
import {
  addingApart,
  getAllStaticValue,
} from "../../hooks/useApartForRent";
import { FormAdd } from './components';

const ApartForRentAdd = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const [apartInfor, setApartInfor] = useState({
    apart_code: "",
    agency_name: "",
    agency_phone: "",
    agency_email: "",
    area_apart: "",
    sqm: 0,
    bedroom: "",
    house_owner: "",
    phone_owner: "",
    price: 0,
    email_owner: "",
    status_furniture: "",
    note: "",
  });

  const [areaApart, setAreaApart] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);
  const [statusFurniture, setStatusFurniture] = useState([]);

  const convertArray = ["sqm", "price"];

  const handleInput = (event) => {
    event.target
      ? setApartInfor({
          ...apartInfor,
          [event.target.name]: convertArray.includes(event.target.name)
            ? parseFloat(event.target.value.replace(",", ""))
            : event.target.value,
        })
      : setApartInfor({
          ...apartInfor,
          [event.value.split(" ")[0]]: event.label,
        });
  };

  const handleAddingApart = async (event) => {
    event.preventDefault();
    await addingApart(apartInfor, navigate);
  };

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
    <FormAdd
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
