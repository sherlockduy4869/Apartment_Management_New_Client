import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "./../../contexts/ContextProvider";
import {
  addingApartForSell,
  getAllStaticValue,
} from "../../hooks/useApartForSell";
import { FormAdd } from './components';

const ApartForSellAdd = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const [apartForSell, setApartForSell] = useState({
    apart_code: "",
    agency_name: "",
    agency_phone: "",
    agency_email: "",
    area_apart: "",
    sqm: 0,
    bedroom: "",
    house_owner: "",
    usd_price: 0,
    phone_owner: "",
    vnd_price: 0,
    email_owner: "",
    note: "",
  });

  const [areaApart, setAreaApart] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);

  const convertArray = ["sqm", "vnd_price", "usd_price"];

  const handleInput = (event) => {
    event.target
      ? setApartForSell({
          ...apartForSell,
          [event.target.name]: convertArray.includes(event.target.name)
            ? parseFloat(event.target.value.replace(",", ""))
            : event.target.value,
        })
      : setApartForSell({
          ...apartForSell,
          [event.value.split(" ")[0]]: event.label,
        });
  };

  const handleAddingApart = async (event) => {
    event.preventDefault();
    await addingApartForSell(apartForSell, navigate);
  };

  /* get apartment for sell list */
  useEffect(() => {
    const init = async () => {
      try {
        const allStaticValue = await getAllStaticValue();
        setAreaApart(allStaticValue.areaApart);
        setBedRoom(allStaticValue.bedRoom);
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
    handleInput = {handleInput}
    handleAddingApart = {handleAddingApart}
    />
  );
};

export default ApartForSellAdd;
