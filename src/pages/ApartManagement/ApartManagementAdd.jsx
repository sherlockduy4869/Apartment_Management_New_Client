import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "./../../contexts/ContextProvider";
import {
  addingApart,
  getAllStaticValue,
} from "../../hooks/useApartManagement";
import { FormAdd } from './components';

const ApartManagementAdd = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const [apartInfor, setApartInfor] = useState({
    apart_code: "",
    area_apart: "",
    house_owner: "",
    door_pass: "",
    bedroom: "",
    wifi_pass: "",
    management_fee: 0,
    electric_code: "",
    internet_code: "",
    internet_note: "",
    mechanical_key_office: "",
    pn1_office: "",
    pn2_office: "",
    pn3_office: "",
    pn4_office: "",
    balcony_office: "",
    mailbox_office: "",
    mechanical_key_customer: "",
    pn1_customer: "",
    pn2_customer: "",
    pn3_customer: "",
    pn4_customer: "",
    balcony_customer: "",
    mailbox_customer: "",
    note_for_key: "",
    elevator_card_office: "",
    big_magnetic_card_office: "",
    small_magnetic_card_office: "",
    elevator_card_customer: "",
    big_magnetic_card_customer: "",
    small_magnetic_card_customer: "",
    air_condition_remote: "",
    other_note: ""
  });

  const [areaApart, setAreaApart] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);

  const convertArray = ["management_fee"];

  const handleInput = (event) => {
    event.target
      ? setApartInfor({
          ...apartInfor,
          [event.target.name]: convertArray.includes(event.target.name)
            ? parseFloat(event.target.value.replaceAll(",", ""))
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

export default ApartManagementAdd;
