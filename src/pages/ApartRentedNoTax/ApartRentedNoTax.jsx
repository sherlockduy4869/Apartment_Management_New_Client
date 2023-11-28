import { useState, useEffect } from "react";
import { Table } from "./components";
import {
  deleteApart,
  fetchAllApart,
  searchApart,
} from "../../hooks/useApartRentedNoTax";

const ApartRentedNoTax = () => {
  const [apartList, setApartList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterApart, setFilterApart] = useState([]);

  const handleDeleteApart = async (apart_code) => {
    const apartCode = await deleteApart(apart_code);
    setApartList(
      apartList.filter(
        (apart) => apart.apart_code !== apartCode
      )
    );
    setFilterApart(
      filterApart.filter(
        (filterApart) => filterApart.apart_code !== apartCode
      )
    );
  };

  useEffect(() => {
    const init = async () => {
      try {
        const apartList = await fetchAllApart();
        setApartList(apartList);
        setFilterApart(apartList);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const result = await searchApart(apartList, search);
        setFilterApart(result);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apartList, search]);

  return (
    <Table
      filterApart={filterApart}
      handleDeleteApart={handleDeleteApart}
      setSearch={setSearch}
    />
  );
};

export default ApartRentedNoTax;
