import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FormDetails } from "./components";
import { useStateContext } from "./../../contexts/ContextProvider";
import { getApartForSellDetails } from "../../hooks/useApartForSell";

const ApartForSellDetails = () => {
  const { currentColor } = useStateContext();
  const { apart_code } = useParams();
  const [apartForSellDetails, setApartForSellDetails] = useState({});

  /* get apartment for sell details */
  useEffect(() => {
    const init = async () => {
      try {
        const apartForSellDetails = await getApartForSellDetails(apart_code);
        setApartForSellDetails(apartForSellDetails);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apart_code]);

  return (
    <FormDetails
      currentColor={currentColor}
      apartForSellDetails={apartForSellDetails}
    />
  );
};

export default ApartForSellDetails;
