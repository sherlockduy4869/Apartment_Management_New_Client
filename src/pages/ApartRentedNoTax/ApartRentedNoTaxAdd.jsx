import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "./../../contexts/ContextProvider";
import { addingApart } from "../../hooks/useApartRentedNoTax";

import { fetchAllApart } from "../../hooks/useApartForRent";

import { FormAdd } from "./components";

const ApartRentedNoTaxAdd = () => {
  const navigate = useNavigate();

  const { currentColor } = useStateContext();
  const [apartInfor, setApartInfor] = useState({
    apart_code: "",
    agency_name: "",
    agency_phone: "",
    agency_email: "",
    customer_name:"",
    customer_phone:"",
    customer_email: "",
    fee_per_month: 0,
    management_fee: 0,
    owner_recieved: 0,
    start_date: "",
    end_date: "",
    num_day_remind: 0,
    payment_term: 0,
    note: ""
  });

  const [apartForRentAvailable, setApartForRentAvailable] = useState([]);

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
  };

  const handleAddingApart = async (event) => {
    event.preventDefault();
    await addingApart(apartInfor, navigate);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const listApartForRentAvailable = await fetchAllApart();
        const listApartCode = listApartForRentAvailable.map((apart) => {
          return {
            label: apart.apart_code,
            value: `apart_code ${apart.apart_code}`,
          };
        });
        setApartForRentAvailable(listApartCode);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <FormAdd
      currentColor={currentColor}
      handleInput={handleInput}
      handleAddingApart={handleAddingApart}
      apartForRentAvailable={apartForRentAvailable}
    />
  );
};

export default ApartRentedNoTaxAdd;
