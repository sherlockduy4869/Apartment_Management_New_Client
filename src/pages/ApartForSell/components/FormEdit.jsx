import { Link } from "react-router-dom";
import Select from "react-select";
import { NumericFormat } from "react-number-format";
import { useState, useEffect } from "react";

import { Header } from "../../../components";
import * as ROUTES from "../../../constants";

const FormEdit = ({
  currentColor,
  handleInput,
  handleEditingApart,
  apartDetails,
  areaApart,
  bedRoom,
}) => {
  const [areaDetails, setAreaDetails] = useState("");
  const [bedRoomDetails, setBedRoomDetails] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        setAreaDetails({
          value: `area_apart ${apartDetails.area_apart}`,
          label: apartDetails.area_apart,
        });
        setBedRoomDetails({
          value: `bedroom ${apartDetails.bedroom}`,
          label: apartDetails.bedroom,
        });
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [apartDetails]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment For Sell" />

      <div className="text-2xl mb-2">
        EDITING APARTMENT FOR SELL: {apartDetails.apart_code}
      </div>
      <Link to={ROUTES.APART_FOR_SELL}>
        <button
          style={{ backgroundColor: currentColor }}
          className="mb-6 font-semibold text-white py-2 px-4 rounded"
        >
          Back To Apart For Sell List
        </button>
      </Link>

      <form className="w-full max-w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Apart Code
            </label>
            <input
              disabled
              value={apartDetails.apart_code ? apartDetails.apart_code : ""}
              name="apart_code"
              type="text"
              onChange={handleInput}
              placeholder="Apartment Code"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Name
            </label>
            <input
              name="agency_name"
              value={apartDetails.agency_name ? apartDetails.agency_name : ""}
              type="text"
              onChange={handleInput}
              placeholder="Agency Name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Area
            </label>
            <Select
              name="area_apart"
              options={areaApart}
              value={areaDetails}
              onChange={(event) => {
                handleInput(event);
                setAreaDetails({
                  value: `area_apart ${event.label}`,
                  label: event.label,
                });
              }}
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Phone
            </label>
            <input
              name="agency_phone"
              value={apartDetails.agency_phone ? apartDetails.agency_phone : ""}
              type="text"
              onChange={handleInput}
              placeholder="Agency Phone"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Bedroom
            </label>
            <Select
              name="bedroom"
              value={bedRoomDetails}
              options={bedRoom}
              onChange={(event) => {
                handleInput(event);
                setBedRoomDetails({
                  value: `bedroom ${event.label}`,
                  label: event.label,
                });
              }}
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Email
            </label>
            <input
              name="agency_email"
              value={apartDetails.agency_email ? apartDetails.agency_email : ""}
              type="text"
              onChange={handleInput}
              placeholder="Agency Email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              SQM
            </label>
            <input
              name="sqm"
              value={apartDetails.sqm ? apartDetails.sqm : ""}
              type="number"
              onChange={handleInput}
              placeholder="SQM"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              House Owner
            </label>
            <input
              name="house_owner"
              value={apartDetails.house_owner ? apartDetails.house_owner : ""}
              type="text"
              onChange={handleInput}
              placeholder="House Owner"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              USD Price
            </label>
            <NumericFormat
              name="usd_price"
              value={apartDetails.usd_price ? apartDetails.usd_price : ""}
              placeholder="Price"
              className="currency appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              thousandSeparator=","
              onChange={handleInput}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Owner
            </label>
            <input
              name="phone_owner"
              value={apartDetails.phone_owner ? apartDetails.phone_owner : ""}
              type="text"
              onChange={handleInput}
              placeholder="Phone Owner"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              VND Price
            </label>
            <NumericFormat
              name="vnd_price"
              value={apartDetails.vnd_price ? apartDetails.vnd_price : ""}
              placeholder="Price"
              className="currency appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              thousandSeparator=","
              onChange={handleInput}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email Owner
            </label>
            <input
              name="email_owner"
              value={apartDetails.email_owner ? apartDetails.email_owner : ""}
              type="text"
              onChange={handleInput}
              placeholder="Email Owner"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
            px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs 
            font-bold mb-2"
              htmlFor="grid-city"
            >
              Note
            </label>

            <textarea
              name="note"
              value={apartDetails.note ? apartDetails.note : ""}
              onChange={handleInput}
              rows="4"
              placeholder="Write note here..."
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
          dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0 text-center">
            <button
              style={{ backgroundColor: currentColor }}
              onClick={handleEditingApart}
              className="text-white font-bold py-2 px-4 rounded"
            >
              EDITING APART
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
