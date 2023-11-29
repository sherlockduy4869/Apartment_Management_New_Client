import { Link } from "react-router-dom";

import { Header } from "../../../components";
import * as ROUTES from "../../../constants";

const FormEditInfor = ({
  currentColor,
  handleInput,
  handleEditingUserInfor,
  userInfor,
}) => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="User Infor" />

      <div className="text-2xl mb-2">EDITING USER INFOR</div>
      <Link to={ROUTES.USER_PROFILE}>
        <button
          style={{ backgroundColor: currentColor }}
          className="mb-6 font-semibold text-white py-2 px-4 rounded"
        >
          Back To User Profile
        </button>
      </Link>

      <form className="w-full max-w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              value={userInfor?.name}
              name="name"
              type="text"
              onChange={handleInput}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              disabled
              value={userInfor?.email}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0 text-center">
            <button
              style={{ backgroundColor: currentColor }}
              onClick={handleEditingUserInfor}
              className="text-white font-bold py-2 px-4 rounded"
            >
              EDITING USER INFOR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEditInfor;
