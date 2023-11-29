import { Link } from "react-router-dom";
import { FaPlus, FaList, FaHandshake } from "react-icons/fa";

import { Header } from "../../components";
import ApartAddingStyle from "../../assets/ApartAdding.module.css";
import * as ROUTES from "../../constants/routes";

const ApartRentedNoTaxArea = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment Rented No Tax" />
      <div className={ApartAddingStyle.adding_apart_block}>
        <div className={ApartAddingStyle.adding_apart_area}>
          <div className={`${ApartAddingStyle.block_adding} mb-4`}>
            <Link to={ROUTES.APART_RENTED_NO_TAX_ADD}>
              <FaPlus color="#7b74ec" />
              <span>Add Apart</span>
            </Link>
          </div>
          <div className={`${ApartAddingStyle.block_adding} mb-4`}>
            <Link to={ROUTES.APART_RENTED_NO_TAX}>
              <FaList color="#5c8af0" />
              <span>List Apart</span>
            </Link>
          </div>
          <div className={`${ApartAddingStyle.block_adding} mb-4`}>
            <Link to={ROUTES.APART_RENTED_NO_TAX}>
              <FaHandshake color="#e45d99" />
              <span>Apart Negotiate</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartRentedNoTaxArea;
