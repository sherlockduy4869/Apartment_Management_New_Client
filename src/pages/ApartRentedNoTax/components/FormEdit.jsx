import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import Cleave from "cleave.js/react";

import { Header } from "../../../components";
import * as ROUTES from "../../../constants";

const FormEdit = ({
  currentColor,
  handleInput,
  handleEditingApart,
  apartDetails,
}) => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment Rented No Tax" />

      <div className="text-2xl mb-2">
        EDITING APARTMENT RENTED NO TAX: {apartDetails.apart_code}
      </div>
      <Link to={ROUTES.APART_RENTED_NO_TAX}>
        <button
          style={{ backgroundColor: currentColor }}
          className="mb-6 font-semibold text-white py-2 px-4 rounded"
        >
          Back To Apart Rented No Tax List
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
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency name
            </label>
            <input
              name="agency_name"
              value={apartDetails.agency_name ? apartDetails.agency_name : ""}
              onChange={handleInput}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Fee/Month
            </label>
            <NumericFormat
              name="fee_per_month"
              value={
                apartDetails.fee_per_month ? apartDetails.fee_per_month : 0
              }
              className="currency appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              thousandSeparator=","
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Agency Phone
            </label>
            <input
              name="agency_phone"
              value={apartDetails.agency_phone ? apartDetails.agency_phone : ""}
              onChange={handleInput}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Management Fee
            </label>
            <NumericFormat
              name="management_fee"
              value={
                apartDetails.management_fee ? apartDetails.management_fee : 0
              }
              onChange={handleInput}
              className="currency appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              thousandSeparator=","
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Payment Terms
            </label>
            <input
              name="payment_term"
              value={apartDetails.payment_term ? apartDetails.payment_term : ""}
              type="text"
              onChange={handleInput}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Customer Name
            </label>
            <input
              name="customer_name"
              value={
                apartDetails.customer_name ? apartDetails.customer_name : ""
              }
              onChange={handleInput}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Number Of Day Remind Negotiate
            </label>
            <input
              name="num_day_remind"
              value={
                apartDetails.num_day_remind ? apartDetails.num_day_remind : ""
              }
              onChange={handleInput}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Customer Phone
            </label>
            <input
              name="customer_phone"
              value={
                apartDetails.customer_phone ? apartDetails.customer_phone : ""
              }
              onChange={handleInput}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Start Date
            </label>
            <Cleave
              name="start_date"
              placeholder="Start Date"
              value={apartDetails.start_date ? apartDetails.start_date : ""}
              onChange={handleInput}
              options={{
                date: true,
                delimiter: "-",
                datePattern: ["d", "m", "Y"],
              }}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Customer Email
            </label>
            <input
              name="customer_email"
              value={
                apartDetails.customer_email ? apartDetails.customer_email : ""
              }
              onChange={handleInput}
              type="text"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              End Date
            </label>
            <Cleave
              name="end_date"
              placeholder="End Date"
              value={apartDetails.end_date ? apartDetails.end_date : ""}
              onChange={handleInput}
              options={{
                date: true,
                delimiter: "-",
                datePattern: ["d", "m", "Y"],
              }}
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
