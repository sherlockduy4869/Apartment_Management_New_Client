import { useState, useEffect } from "react";
import { Table } from "./components";
import {
  deleteApartForSell,
  fetchAllApartForSell,
  searchApartForSell,
} from "../../hooks/useApartForSell";

const ApartForSell = () => {
  const [apartForSellList, setApartForSellList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterApartForSell, setFilterApartForSell] = useState([]);

  const handleDeleteApartForSell = async (apart_code) => {
    const apartCode = await deleteApartForSell(apart_code);
    setApartForSellList(
      apartForSellList.filter(
        (apartForSellList) => apartForSellList.apart_code !== apartCode
      )
    );
    setFilterApartForSell(
      filterApartForSell.filter(
        (filterApartForSell) => filterApartForSell.apart_code !== apartCode
      )
    );
  };

  /* get apartment for sell list */
  useEffect(() => {
    const init = async () => {
      try {
        const apartForSellList = await fetchAllApartForSell();
        setApartForSellList(apartForSellList);
        setFilterApartForSell(apartForSellList);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  /* filtering apartment for sell list */
  useEffect(() => {
    const init = async () => {
      try {
        const result = await searchApartForSell(apartForSellList, search);
        setFilterApartForSell(result);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apartForSellList, search]);

  /*------------------*/

  return (
    <Table
      filterApartForSell={filterApartForSell}
      handleDeleteApartForSell={handleDeleteApartForSell}
      setSearch={setSearch}
    />
  );
};

export default ApartForSell;
