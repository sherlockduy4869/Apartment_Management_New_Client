import { Link } from "react-router-dom";
import { Header } from "../../components";
import "../../assets/ApartAdding.css";
import { FaBookOpen, FaKey } from "react-icons/fa";
import * as ROUTES from "../../constants/routes";

const UserProfile = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="User Profile" />
      <div className="adding_apart_block">
        <div className="adding_apart_area">
          <div className="block_adding mb-4">
            <Link to={ROUTES.USER_PROFILE_EDIT_INFOR}>
              <FaBookOpen color="#7b74ec" />
              <span>Edit Profile</span>
            </Link>
          </div>
          <div className="block_adding mb-4">
            <Link to={ROUTES.USER_PROFILE_EDIT_PASSWORD}>
              <FaKey color="#5c8af0" />
              <span>Change Password</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
