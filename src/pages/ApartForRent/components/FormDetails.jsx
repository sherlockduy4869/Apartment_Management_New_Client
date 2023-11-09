import { Link } from "react-router-dom";

import { Header } from "../../../components";
import * as ROUTES from "../../../constants";

const FormDetails = ({ currentColor, apartForRentDetails }) => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment For Rent" />

      <div className="text-2xl mb-2">
        APARTMENT FOR RENT DETAILS: <b>{apartForRentDetails.apart_code}</b>
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
                apartForRentDetails.apart_code
                  ? apartForRentDetails.apart_code
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />

            <div style={{ color: "#f43f5e" }}>{/* {errorApartCode} */}</div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Name
            </label>
            <input
              disabled
              value={
                apartForRentDetails.agency_name
                  ? apartForRentDetails.agency_name
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />

            <div style={{ color: "#f43f5e" }}>{/* {errorImage} */}</div>
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
                apartForRentDetails.area_apart
                  ? apartForRentDetails.area_apart
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />

            <div style={{ color: "#f43f5e" }}>{/* {errorProject} */}</div>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Phone
            </label>
            <input
              disabled
              value={
                apartForRentDetails.agency_phone
                  ? apartForRentDetails.agency_phone
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
                apartForRentDetails.bedroom ? apartForRentDetails.bedroom : ""
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
                apartForRentDetails.agency_email
                  ? apartForRentDetails.agency_email
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />

            <div style={{ color: "#f43f5e" }}>{/* {errorImage} */}</div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              SQM
            </label>
            <input
              disabled
              value={apartForRentDetails.sqm ? apartForRentDetails.sqm : ""}
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
                apartForRentDetails.house_owner
                  ? apartForRentDetails.house_owner
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />

            <div style={{ color: "#f43f5e" }}>{/* {errorImage} */}</div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Status Furniture
            </label>
            <input
              disabled
              value={
                apartForRentDetails.status_furniture
                  ? apartForRentDetails.status_furniture
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
                apartForRentDetails.phone_owner
                  ? apartForRentDetails.phone_owner
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />

            <div style={{ color: "#f43f5e" }}>{/* {errorImage} */}</div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>
            <input
              disabled
              value={apartForRentDetails.price ? apartForRentDetails.price : ""}
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
                apartForRentDetails.email_owner
                  ? apartForRentDetails.email_owner
                  : ""
              }
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />

            <div style={{ color: "#f43f5e" }}>{/* {errorImage} */}</div>
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
              value={apartForRentDetails.note ? apartForRentDetails.note : ""}
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
            <div className="mb-2">{/* {showElement?addStatus:<></>}  */}</div>
            <Link to={ROUTES.APART_FOR_RENT}>
              <button
                style={{ backgroundColor: currentColor }}
                className="font-semibold text-white py-2 px-4 rounded"
              >
                Back To Apart For Rent list
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormDetails;
