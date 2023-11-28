import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useStateContext } from "./../../contexts/ContextProvider";
import { FormEdit } from "./components";
import { useNavigate } from "react-router-dom";
import {
  editingApart,
  getApartDetailsEditing,
} from "../../hooks/useApartRentedNoTax";
import { getReversedDate } from "../../helpers/function";

const ApartRentedNoTaxEdit = () => {
  const { currentColor } = useStateContext();

  const navigate = useNavigate();

  const { apart_code } = useParams();

  const [apartDetails, setApartDetails] = useState({});

  const [apartInfor, setApartInfor] = useState({
    agency_name: "",
    agency_phone: "",
    agency_email: "",
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    fee_per_month: 0,
    management_fee: 0,
    owner_recieved: 0,
    start_date: "",
    end_date: "",
    num_day_remind: 0,
    payment_term: 0,
    note: "",
  });

  const convertArray = [
    "fee_per_month",
    "management_fee",
    "num_day_remind",
    "payment_term",
  ];

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
        const apartDetails = await getApartDetailsEditing(apart_code);

        setApartDetails(apartDetails);
        setApartInfor({
          agency_name: apartDetails.agency_name ? apartDetails.agency_name : "",
          agency_phone: apartDetails.agency_phone
            ? apartDetails.agency_phone
            : "",
          agency_email: apartDetails.agency_email
            ? apartDetails.agency_email
            : "",
          customer_name: apartDetails.customer_name
            ? apartDetails.customer_name
            : "",
          customer_phone: apartDetails.customer_phone
            ? apartDetails.customer_phone
            : "",
          customer_email: apartDetails.customer_email
            ? apartDetails.customer_email
            : "",
          fee_per_month: apartDetails.fee_per_month
            ? apartDetails.fee_per_month
            : 0,
          management_fee: apartDetails.management_fee
            ? apartDetails.management_fee
            : 0,
          owner_recieved: apartDetails.owner_recieved
            ? apartDetails.owner_recieved
            : 0,

          start_date: apartDetails.start_date ? apartDetails.start_date : "",
          end_date: apartDetails.end_date ? apartDetails.end_date : "",
          num_day_remind: apartDetails.num_day_remind
            ? apartDetails.num_day_remind
            : 0,
          payment_term: apartDetails.payment_term
            ? apartDetails.payment_term
            : 0,
          note: apartDetails.note ? apartDetails.note : "",
        });
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
    />
  );
};

export default ApartRentedNoTaxEdit;
