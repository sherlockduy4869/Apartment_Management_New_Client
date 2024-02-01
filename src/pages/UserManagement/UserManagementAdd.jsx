import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useStateContext } from "./../../contexts/ContextProvider";
import { addingUser, getAllStaticValue } from "../../hooks/useUserManagement";
import { FormAdd } from "./components";

const UserManagementAdd = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const [userInfor, setUserInfor] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [listRole, setListRole] = useState([]);

  const handleInput = (event) => {
    event.target
      ? setUserInfor({
          ...userInfor,
          [event.target.name]: event.target.value,
        })
      : setUserInfor({
          ...userInfor,
          [event.value.split(" ")[0]]: event.label,
        });
  };

  const handleAddingUser = async (event) => {
    event.preventDefault();
    await addingUser(userInfor, navigate);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const allStaticValue = await getAllStaticValue();
        setListRole(allStaticValue.role);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <FormAdd
      currentColor={currentColor}
      handleInput={handleInput}
      handleAddingUser={handleAddingUser}
      listRole={listRole}
    />
  );
};

export default UserManagementAdd;
