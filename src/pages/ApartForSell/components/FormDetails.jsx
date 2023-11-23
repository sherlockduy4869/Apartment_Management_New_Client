import { Link } from "react-router-dom";

import { Header } from "../../../components";
import * as ROUTES from "../../../constants";

const FormDetails = ({ currentColor, apartForSellDetails }) => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment For Sell" />

      <div className="text-2xl mb-2">
        APARTMENT FOR SELL DETAILS: <b>{apartForSellDetails.apart_code}</b>
      </div>

      <form className="w-full max-w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Apart Code
            </label>
            <input
              disabled
              value={
                apartForSellDetails.apart_code
                  ? apartForSellDetails.apart_code
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Name
            </label>
            <input
              disabled
              value={
                apartForSellDetails.agency_name
                  ? apartForSellDetails.agency_name
                  : ""
              }
              type="text"
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
            <input
              disabled
              value={
                apartForSellDetails.area_apart
                  ? apartForSellDetails.area_apart
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Phone
            </label>
            <input
              disabled
              value={
                apartForSellDetails.agency_phone
                  ? apartForSellDetails.agency_phone
                  : ""
              }
              type="text"
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
            <input
              disabled
              value={
                apartForSellDetails.bedroom ? apartForSellDetails.bedroom : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Email
            </label>
            <input
              disabled
              value={
                apartForSellDetails.agency_email
                  ? apartForSellDetails.agency_email
                  : ""
              }
              type="text"
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
              disabled
              value={apartForSellDetails.sqm ? apartForSellDetails.sqm : ""}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              House Owner
            </label>
            <input
              disabled
              value={
                apartForSellDetails.house_owner
                  ? apartForSellDetails.house_owner
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              USD Price
            </label>
            <input
              disabled
              value={
                apartForSellDetails.usd_price
                  ? apartForSellDetails.usd_price
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Owner
            </label>
            <input
              disabled
              value={
                apartForSellDetails.phone_owner
                  ? apartForSellDetails.phone_owner
                  : ""
              }
              type="text"
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
            <input
              disabled
              value={
                apartForSellDetails.vnd_price
                  ? apartForSellDetails.vnd_price
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email Owner
            </label>
            <input
              disabled
              value={
                apartForSellDetails.email_owner
                  ? apartForSellDetails.email_owner
                  : ""
              }
              type="text"
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
              disabled
              value={apartForSellDetails.note ? apartForSellDetails.note : ""}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0 text-center">
            <Link to={ROUTES.APART_FOR_SELL}>
              <button
                style={{ backgroundColor: currentColor }}
                className="font-semibold text-white py-2 px-4 rounded"
              >
                Back To Apart For Sell list
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormDetails;
