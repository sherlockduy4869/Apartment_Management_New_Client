import { useState, useEffect } from "react";

import { useStateContext } from "./../../contexts/ContextProvider";
import { FormChangePassword } from "./components";

import { editUserPassword } from "../../hooks/useUserProfille";

const UserProfileEditInfor = () => {
  const { currentColor } = useStateContext();

  const [userInfor, setUserInfor] = useState({
    newPassword: "",
    confirmmPassword: "",
  });

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

  const handleChangePassword = async (event) => {
    event.preventDefault();
    await editUserPassword(userInfor);
  };

  return (
    <FormChangePassword
      currentColor={currentColor}
      handleInput={handleInput}
      handleChangePassword={handleChangePassword}
    />
  );
};

export default UserProfileEditInfor;
