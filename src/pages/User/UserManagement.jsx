import { Link } from "react-router-dom";
import { Header } from "../../components";
import "../../assets/ApartAdding.css";
import { FaPlus, FaList } from "react-icons/fa";
import * as ROUTES from "../../constants/routes";

const UserManagement = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="User Management" />
      <div className="adding_apart_block">
        <div className="adding_apart_area">
          <div className="block_adding mb-4">
            <Link to={ROUTES.USER_ADDING}>
              <FaPlus color="#7b74ec" />
              <span>Adding New User</span>
            </Link>
          </div>
          <div className="block_adding mb-4">
            <Link to={ROUTES.USER_LIST}>
              <FaList color="#5c8af0" />
              <span>List Current User</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
