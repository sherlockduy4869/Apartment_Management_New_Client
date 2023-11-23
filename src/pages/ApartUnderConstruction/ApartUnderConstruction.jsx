import { useState, useEffect } from "react";
import { Table } from "./components";
import {
  deleteApartUnderConstruction,
  fetchAllApartUnderConstruction,
  searchApartUnderConstruction,
} from "../../hooks/useApartUnderConstruction";

const ApartUnderConstruction = () => {
  const [apartUnderConstructionList, setApartUnderConstructionList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterApartUnderConstruction, setFilterApartUnderConstruction] = useState([]);

  const handleDeleteApartUnderConstruction = async (apart_code) => {
    const apartCode = await deleteApartUnderConstruction(apart_code);
    setApartUnderConstructionList(
      apartUnderConstructionList.filter(
        (apartUnderConstructionList) => apartUnderConstructionList.apart_code !== apartCode
      )
    );
    setFilterApartUnderConstruction(
      filterApartUnderConstruction.filter(
        (filterApartUnderConstruction) => filterApartUnderConstruction.apart_code !== apartCode
      )
    );
  };

  /* get apartment under construction list */
  useEffect(() => {
    const init = async () => {
      try {
        const apartUnderConstructionList = await fetchAllApartUnderConstruction();
        setApartUnderConstructionList(apartUnderConstructionList);
        setFilterApartUnderConstruction(apartUnderConstructionList);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  /* filtering apartment under construction list */
  useEffect(() => {
    const init = async () => {
      try {
        const result = await searchApartUnderConstruction(apartUnderConstructionList, search);
        setFilterApartUnderConstruction(result);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apartUnderConstructionList, search]);

  /*------------------*/

  return (
    <Table
      filterApartUnderConstruction={filterApartUnderConstruction}
      handleDeleteApartUnderConstruction={handleDeleteApartUnderConstruction}
      setSearch={setSearch}
    />
  );
};

export default ApartUnderConstruction;
