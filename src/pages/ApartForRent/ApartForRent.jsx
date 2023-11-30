import { useState, useEffect } from "react";
import { Table } from "./components";
import {
  deleteApart,
  fetchAllApart,
  searchApart,
  getAllStaticValue,
  getTotallNumApart
} from "../../hooks/useApartForRent";

const ApartForRent = () => {
  const [apartList, setApartList] = useState([]);
  const [search, setSearch] = useState("");
  const [filterApart, setFilterApart] = useState([]);
  const [listItemsPerPage, setListItemsPerPage] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNumApart, setTotalNumApart] = useState(0);

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

  const handleDisplayItemsPerPage = async (numOfItem) => {
    const numOfItemsInt = parseInt(numOfItem);
    setItemsPerPage(numOfItemsInt)
  }

  const handleChoseCurrentPage = async (page) => {
    const pageInt = parseInt(page);
    setCurrentPage(pageInt)
  }
 
  useEffect(() => {
    const init = async () => {
      try {
        const apartList = await fetchAllApart(itemsPerPage, currentPage);
        const totalNumApart = await getTotallNumApart();
        setTotalNumApart(totalNumApart)
        setApartList(apartList);
        setFilterApart(apartList);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [itemsPerPage, currentPage]);

  useEffect(() => {
    const init = async () => {
      try {
        const result = await searchApart(apartList, search);
        const allStaticValue = await getAllStaticValue();
        setListItemsPerPage(allStaticValue.listItemsPerPage);
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
      listItemsPerPage={listItemsPerPage}
      handleDisplayItemsPerPage={handleDisplayItemsPerPage}
      handleChoseCurrentPage={handleChoseCurrentPage}
      itemsPerPage={itemsPerPage}
      totalNumApart={totalNumApart}
    />
  );
};

export default ApartForRent;
