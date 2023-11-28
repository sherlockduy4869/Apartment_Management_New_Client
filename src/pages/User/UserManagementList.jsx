import { useState, useEffect } from "react";
import { Table } from "./components";
import {
  deleteUser,
  fetchAllUser,
  searchUser,
} from "../../hooks/useUser";

const UserManagementList = () => {
  const [listUser, setListUser] = useState([]);
  const [search, setSearch] = useState("");
  const [filterListUser, setFilterListUser] = useState([]);

  const handleDeleteUser = async (email) => {
    const emailUser = await deleteUser(email);
    setListUser(
      listUser.filter(
        (user) => user.email !== emailUser
      )
    );
    setFilterListUser(
      filterListUser.filter(
        (filterUser) => filterUser.email !== emailUser
      )
    );
  };

  useEffect(() => {
    const init = async () => {
      try {
        const userList = await fetchAllUser();
        setListUser(userList);
        setFilterListUser(userList);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const result = await searchUser(listUser, search);
        setFilterListUser(result);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [listUser, search]);

  return (
    <Table
      filterListUser={filterListUser}
      handleDeleteUser={handleDeleteUser}
      setSearch={setSearch}
    />
  );
};

export default UserManagementList;
