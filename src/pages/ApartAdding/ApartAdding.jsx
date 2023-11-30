import { Link } from "react-router-dom";
import { FaSellcast, FaKey, FaShoppingCart } from "react-icons/fa";
import { IoMdConstruct } from "react-icons/io";

import { Header } from "../../components";
import ApartAddingStyle from "../../assets/ApartAdding.module.css";
import * as ROUTES from "../../constants/routes";

const ApartAdding = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment Adding" />
      <div className={ApartAddingStyle.adding_apart_block}>
        <div className={ApartAddingStyle.adding_apart_area}>
          <div className={`${ApartAddingStyle.block_adding} mb-4`}>
            <Link to={ROUTES.APART_FOR_RENT_ADD}>
              <FaShoppingCart color="#7b74ec" />
              <span>Apart For Rent</span>
            </Link>
          </div>
          <div className={`${ApartAddingStyle.block_adding} mb-4`}>
            <Link to={ROUTES.APART_FOR_SELL_ADD}>
              <FaSellcast color="#5c8af0" />
              <span>Apart For Sell</span>
            </Link>
          </div>
          <div className={`${ApartAddingStyle.block_adding} mb-4`}>
            <Link to={ROUTES.APART_UNDER_CONSTRUCTION_ADD}>
              <IoMdConstruct color="#e45d99" />
              <span>Apart UC</span>
            </Link>
          </div>
          <div className={`${ApartAddingStyle.block_adding} mb-4`}>
            <Link to={ROUTES.APART_MANAGEMENT_ADD}>
              <FaKey color="#7b74ec" />
              <span>Apart Management</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartAdding;
