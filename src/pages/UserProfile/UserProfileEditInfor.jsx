import { useState, useEffect } from "react";

import { useStateContext } from "./../../contexts/ContextProvider";
import { FormEditInfor } from "./components";

import { getUserByEmail, editUserInfor } from "../../hooks/useUserProfille";

const UserProfileEditInfor = () => {
  const { currentColor } = useStateContext();

  const [userInfor, setUserInfor] = useState({
    name: "",
    email: "",
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

  const handleEditingUserInfor = async (event) => {
    event.preventDefault();
    await editUserInfor(userInfor);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const userInforDetails = await getUserByEmail();
        setUserInfor({
          name: userInforDetails?.name,
          email: userInforDetails?.email,
        })
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <FormEditInfor
      currentColor={currentColor}
      handleInput={handleInput}
      handleEditingUserInfor={handleEditingUserInfor}
      userInfor={userInfor}
    />
  );
};

export default UserProfileEditInfor;
