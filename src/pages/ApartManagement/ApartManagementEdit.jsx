import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useStateContext } from "./../../contexts/ContextProvider";
import { FormEdit } from "./components";
import { useNavigate } from "react-router-dom";
import {
  editingApart,
  getApartDetails,
  getAllStaticValue,
} from "../../hooks/useApartManagement";

const ApartManagementEdit = () => {
  const { currentColor } = useStateContext();

  const navigate = useNavigate();

  const { apart_code } = useParams();

  const [apartDetails, setApartDetails] = useState({});

  const [areaApart, setAreaApart] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);

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
    other_note: "",
  });

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

    event.target
      ? setApartDetails({
          ...apartInfor,
          [event.target.name]: convertArray.includes(event.target.name)
            ? parseFloat(event.target.value.replaceAll(",", ""))
            : event.target.value,
        })
      : setApartDetails({
          ...apartInfor,
          [event.value.split(" ")[0]]: event.label,
        });
  };

  const handleEditingApart = async (event) => {
    event.preventDefault();
    await editingApart(apartInfor, apart_code, navigate);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const apartDetails = await getApartDetails(apart_code);
        const allStaticValue = await getAllStaticValue();

        setApartDetails(apartDetails);
        setApartInfor({
          apart_code: apartDetails.apart_code ? apartDetails.apart_code : "",
          area_apart: apartDetails.area_apart ? apartDetails.area_apart : "",
          house_owner: apartDetails.house_owner ? apartDetails.house_owner : "",
          door_pass: apartDetails.door_pass ? apartDetails.door_pass : "",
          bedroom: apartDetails.bedroom ? apartDetails.bedroom : "",
          wifi_pass: apartDetails.wifi_pass ? apartDetails.wifi_pass : "",
          management_fee: apartDetails.management_fee ? apartDetails.management_fee : 0,
          electric_code: apartDetails.electric_code ? apartDetails.electric_code : "",
          internet_code: apartDetails.internet_code ? apartDetails.internet_code : "",
          internet_note: apartDetails.internet_note ? apartDetails.internet_note : "",
          mechanical_key_office: apartDetails.mechanical_key_office ? apartDetails.mechanical_key_office : "",
          pn1_office: apartDetails.pn1_office ? apartDetails.pn1_office : "",
          pn2_office: apartDetails.pn2_office ? apartDetails.pn2_office : "",
          pn3_office: apartDetails.pn3_office ? apartDetails.pn3_office : "",
          pn4_office: apartDetails.pn4_office ? apartDetails.pn4_office : "",
          balcony_office: apartDetails.balcony_office ? apartDetails.balcony_office : "",
          mailbox_office: apartDetails.mailbox_office ? apartDetails.mailbox_office : "",
          mechanical_key_customer: apartDetails.mechanical_key_customer ? apartDetails.mechanical_key_customer : "",
          pn1_customer: apartDetails.pn1_customer ? apartDetails.pn1_customer : "",
          pn2_customer: apartDetails.pn2_customer ? apartDetails.pn2_customer : "",
          pn3_customer: apartDetails.pn3_customer ? apartDetails.pn3_customer : "",
          pn4_customer: apartDetails.pn4_customer ? apartDetails.pn4_customer : "",
          balcony_customer: apartDetails.balcony_customer ? apartDetails.balcony_customer : "",
          mailbox_customer: apartDetails.mailbox_customer ? apartDetails.mailbox_customer : "",
          note_for_key: apartDetails.note_for_key ? apartDetails.note_for_key : "",
          elevator_card_office: apartDetails.elevator_card_office ? apartDetails.elevator_card_office : "",
          big_magnetic_card_office: apartDetails.big_magnetic_card_office ? apartDetails.big_magnetic_card_office : "",
          small_magnetic_card_office: apartDetails.small_magnetic_card_office ? apartDetails.small_magnetic_card_office : "",
          elevator_card_customer: apartDetails.elevator_card_customer ? apartDetails.elevator_card_customer : "",
          big_magnetic_card_customer: apartDetails.big_magnetic_card_customer ? apartDetails.big_magnetic_card_customer : "",
          small_magnetic_card_customer: apartDetails.small_magnetic_card_customer ? apartDetails.small_magnetic_card_customer : "",
          air_condition_remote: apartDetails.air_condition_remote ? apartDetails.air_condition_remote : "",
          other_note: apartDetails.other_note ? apartDetails.other_note : "",
        });
        setAreaApart(allStaticValue.areaApart);
        setBedRoom(allStaticValue.bedRoom);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apart_code]);

  return (
    <FormEdit
      currentColor={currentColor}
      handleInput={handleInput}
      handleEditingApart={handleEditingApart}
      apartDetails={apartDetails}
      areaApart={areaApart}
      bedRoom={bedRoom}
    />
  );
};

export default ApartManagementEdit;
