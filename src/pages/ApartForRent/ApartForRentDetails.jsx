import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FormDetails } from "./components";
import { useStateContext } from "./../../contexts/ContextProvider";
import { getApartForRentDetails } from "../../hooks/useApartForRent";

const ApartForRentDetails = () => {
  const { currentColor } = useStateContext();
  const { apart_code } = useParams();
  const [apartForRentDetails, setApartForRentDetails] = useState({});

  /* get apartment for rent details */
  useEffect(() => {
    const init = async () => {
      try {
        const apartForRentDetails = await getApartForRentDetails(apart_code);
        setApartForRentDetails(apartForRentDetails);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apart_code]);

  return (
    <FormDetails
      currentColor={currentColor}
      apartForRentDetails={apartForRentDetails}
    />
  );
};

export default ApartForRentDetails;
