import { Link } from "react-router-dom";
import { Header } from "../../components";
import "../../assets/ApartAdding.css";
import { FaPlus } from "react-icons/fa";

const ApartAdding = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment Adding" />
      <div className="adding_apart_block">
        <div className="adding_apart_area">
          <div className="block_adding mb-4">
            <Link to={"/"}>
              <FaPlus color="#7b74ec" />
              <span>Apart For Rent</span>
            </Link>
          </div>
          <div className="block_adding mb-4">
            <Link to={"/"}>
              <FaPlus color="#5c8af0" />
              <span>Apart For Sell</span>
            </Link>
          </div>
          <div className="block_adding mb-4">
            <Link to={"/"}>
              <FaPlus color="#e45d99" />
              <span>Apart UC</span>
            </Link>
          </div>
          <div className="block_adding mb-4">
            <Link to={"/"}>
              <FaPlus color="#7b74ec" />
              <span>Apart Management</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartAdding;
