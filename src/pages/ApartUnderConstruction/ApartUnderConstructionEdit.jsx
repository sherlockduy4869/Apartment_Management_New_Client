import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useStateContext } from "./../../contexts/ContextProvider";
import { FormEdit } from "./components";
import { useNavigate } from "react-router-dom";
import {
  editingApartUnderConstruction,
  getApartUnderConstructionDetails,
  getAllStaticValue,
} from "../../hooks/useApartUnderConstruction";

const ApartUnderConstructionEdit = () => {
  const { currentColor } = useStateContext();

  const navigate = useNavigate();

  const { apart_code } = useParams();

  const [apartUnderConstructionDetails, setApartUnderConstructionDetails] =
    useState({});

  const [areaApart, setAreaApart] = useState([]);
  const [bedRoom, setBedRoom] = useState([]);
  const [statusApart, setStatusApart] = useState([]);

  const [apartUnderConstruction, setApartUnderConstruction] = useState({
    apart_code: "",
    agency_name: "",
    agency_phone: "",
    agency_email: "",
    area_apart: "",
    sqm: 0,
    bedroom: "",
    house_owner: "",
    phone_owner: "",
    status_apart: "",
    note: "",
  });

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

    event.target
      ? setApartUnderConstructionDetails({
          ...apartUnderConstruction,
          [event.target.name]: convertArray.includes(event.target.name)
            ? parseFloat(event.target.value.replace(",", ""))
            : event.target.value,
        })
      : setApartUnderConstructionDetails({
          ...apartUnderConstruction,
          [event.value.split(" ")[0]]: event.label,
        });
  };

  const handleEditingApart = async (event) => {
    event.preventDefault();
    await editingApartUnderConstruction(
      apartUnderConstruction,
      apart_code,
      navigate
    );
  };

  /* get apartment under construction details */
  useEffect(() => {
    const init = async () => {
      try {
        const apartDetails = await getApartUnderConstructionDetails(apart_code);
        const allStaticValue = await getAllStaticValue();

        setApartUnderConstructionDetails(apartDetails);
        setApartUnderConstruction({
          apart_code: apartDetails.apart_code ? apartDetails.apart_code : "",
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
          status_apart: apartDetails.status_apart
            ? apartDetails.status_apart
            : "",
          note: apartDetails.note ? apartDetails.note : "",
        });
        setAreaApart(allStaticValue.areaApart);
        setBedRoom(allStaticValue.bedRoom);
        setStatusApart(allStaticValue.statusApart);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apart_code]);

  console.log(statusApart);

  return (
    <FormEdit
      currentColor={currentColor}
      handleInput={handleInput}
      handleEditingApart={handleEditingApart}
      apartUnderConstructionDetails={apartUnderConstructionDetails}
      areaApart={areaApart}
      bedRoom={bedRoom}
      statusApart={statusApart}
    />
  );
};

export default ApartUnderConstructionEdit;
