import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "./../../contexts/ContextProvider";
import {
  addingApartUnderConstruction,
  getAllStaticValue,
} from "../../hooks/useApartUnderConstruction";
import { FormAdd } from './components';

const ApartUnderConstructionAdd = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const [apartUnderConstruction, setApartUnderConstruction] = useState({
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
  const [statusApart, setStatusApart] = useState([]);

  const convertArray = ["sqm"];

  const handleInput = (event) => {
    event.target
      ? setApartUnderConstruction({
          ...apartUnderConstruction,
          [event.target.name]: convertArray.includes(event.target.name)
            ? parseFloat(event.target.value.replace(",", ""))
            : event.target.value,
        })
      : setApartUnderConstruction({
          ...apartUnderConstruction,
          [event.value.split(" ")[0]]: event.label,
        });
  };

  const handleAddingApart = async (event) => {
    event.preventDefault();
    await addingApartUnderConstruction(apartUnderConstruction, navigate);
  };

  /* get apartment under construction list */
  useEffect(() => {
    const init = async () => {
      try {
        const allStaticValue = await getAllStaticValue();
        setAreaApart(allStaticValue.areaApart);
        setBedRoom(allStaticValue.bedRoom);
        setStatusApart(allStaticValue.statusApart);
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
    statusApart = {statusApart}
    handleInput = {handleInput}
    handleAddingApart = {handleAddingApart}
    />
  );
};

export default ApartUnderConstructionAdd;
