import { useState, useEffect } from "react";

import { Table } from './components';
import {
  deleteApartForRent,
  fetchAllApartForRent,
  searchApartForRent,
} from "../../hooks/useApartForRent";

const ApartForRent = () => {
  const [apartForRentList, setApartForRentList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterApartForRent, setFilterApartForRent] = useState([]);

  const handleDeleteApartForRent = async (apart_code) => {
    const apartCode = await deleteApartForRent(apart_code);
    setApartForRentList(
      apartForRentList.filter((apartForRentList) => apartForRentList.apart_code !== apartCode)
    )
    setFilterApartForRent(
      filterApartForRent.filter((filterApartForRent) => filterApartForRent.apart_code !== apartCode)
    )
  };

  /* get apartment for rent list */
  useEffect(() => {
    const init = async () => {
      try {
        const apartForRentList = await fetchAllApartForRent();
        setApartForRentList(apartForRentList);
        setFilterApartForRent(apartForRentList);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  /* filtering apartment for rent list */
  useEffect(() => {
    const init = async () => {
      try {
        const result = await searchApartForRent(apartForRentList, search);
        setFilterApartForRent(result);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [search]);
  /*------------------*/

  return (
    <Table 
    filterApartForRent = {filterApartForRent}
    handleDeleteApartForRent = {handleDeleteApartForRent}
    setSearch = {setSearch}
    />
  );
};

export default ApartForRent;
