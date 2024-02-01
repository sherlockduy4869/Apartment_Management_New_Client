import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useStateContext } from "./../../contexts/ContextProvider";
import { FormEdit } from "./components";
import { useNavigate } from "react-router-dom";
import {
  editingApart,
  getApartDetails,
  getAllStaticValue,
} from "../../hooks/useApartForSell";

const ApartForSellEdit = () => {
  const { currentColor } = useStateContext();

  const navigate = useNavigate();

  const { apart_code } = useParams();

  const [apartDetails, setApartDetails] = useState({});

  const [areaApart, setAreaApart] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);

  const [apartInfor, setApartInfor] = useState({
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

  const convertArray = ["sqm", "vnd_price", "usd_price"];

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
          agency_name: apartDetails.agency_name ? apartDetails.agency_name : "",
          agency_phone: apartDetails.agency_phone
            ? apartDetails.agency_phone
            : "",
          agency_email: apartDetails.agency_email
            ? apartDetails.agency_email
            : "",
          area_apart: apartDetails.area_apart ? apartDetails.area_apart : "",
          sqm: apartDetails.sqm ? apartDetails.sqm : 0,
          bedroom: apartDetails.bedroom ? apartDetails.bedroom : "",
          house_owner: apartDetails.house_owner ? apartDetails.house_owner : "",
          phone_owner: apartDetails.phone_owner ? apartDetails.phone_owner : "",
          vnd_price: apartDetails.vnd_price ? apartDetails.vnd_price : 0,
          usd_price: apartDetails.usd_price ? apartDetails.usd_price : 0,
          email_owner: apartDetails.email_owner ? apartDetails.email_owner : "",
          note: apartDetails.note ? apartDetails.note : "",
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

export default ApartForSellEdit;
