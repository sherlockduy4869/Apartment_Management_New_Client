import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FormDetails } from "./components";
import { useStateContext } from "./../../contexts/ContextProvider";
import { getApartUnderConstructionDetails } from "../../hooks/useApartUnderConstruction";

const ApartUnderConstructionDetails = () => {
  const { currentColor } = useStateContext();
  const { apart_code } = useParams();
  const [apartUnderConstructionDetails, setApartUnderConstructionDetails] = useState({});

  /* get apartment under construction details */
  useEffect(() => {
    const init = async () => {
      try {
        const apartUnderConstructionDetails = await getApartUnderConstructionDetails(apart_code);
        setApartUnderConstructionDetails(apartUnderConstructionDetails);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apart_code]);

  return (
    <FormDetails
      currentColor={currentColor}
      apartUnderConstructionDetails={apartUnderConstructionDetails}
    />
  );
};

export default ApartUnderConstructionDetails;
