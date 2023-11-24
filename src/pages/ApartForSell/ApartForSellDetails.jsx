import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FormDetails } from "./components";
import { useStateContext } from "./../../contexts/ContextProvider";
import { getApartDetails } from "../../hooks/useApartForSell";

const ApartForSellDetails = () => {
  const { currentColor } = useStateContext();
  const { apart_code } = useParams();
  const [apartDetails, setApartDetails] = useState({});

  useEffect(() => {
    const init = async () => {
      try {
        const apartDetails = await getApartDetails(apart_code);
        setApartDetails(apartDetails);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apart_code]);

  return (
    <FormDetails
      currentColor={currentColor}
      apartDetails={apartDetails}
    />
  );
};

export default ApartForSellDetails;
