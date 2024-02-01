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
      <Header category="Page" title="Apartment Management" />

      <div className="text-2xl mb-2">
        EDITING APARTMENT MANAGEMENT: {apartDetails.apart_code}
      </div>
      <Link to={ROUTES.APART_MANAGEMENT}>
        <button
          style={{ backgroundColor: currentColor }}
          className="mb-6 font-semibold text-white py-2 px-4 rounded"
        >
          Back To Apart Management List
        </button>
      </Link>

      <form className="w-full max-w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Apart Code
            </label>
            <input
              name="apart_code"
              value={apartDetails.apart_code ? apartDetails.apart_code : ""}
              type="text"
              onChange={handleInput}
              placeholder="Apartment Code"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
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
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
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

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Door Pass
            </label>
            <input
              name="door_pass"
              value={apartDetails.door_pass ? apartDetails.door_pass : ""}
              type="text"
              onChange={handleInput}
              placeholder="Door Pass"
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
              Wifi Pass
            </label>
            <input
              name="wifi_pass"
              value={apartDetails.wifi_pass ? apartDetails.wifi_pass : ""}
              type="text"
              onChange={handleInput}
              placeholder="Wifi Pass"
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
              value={apartDetails.management_fee ? apartDetails.management_fee : ""}
              placeholder="Management Fee"
              className="currency appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
              thousandSeparator=","
              onChange={handleInput}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Electric Code
            </label>
            <input
              name="electric_code"
              value={apartDetails.electric_code ? apartDetails.electric_code : ""}
              type="text"
              onChange={handleInput}
              placeholder="Electric Code"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2"
              htmlFor="grid-city"
            >
              Internet Code
            </label>

            <textarea
              name="internet_code"
              value={apartDetails.internet_code ? apartDetails.internet_code : ""}
              onChange={handleInput}
              rows="4"
              placeholder="Internet Code"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2"
              htmlFor="grid-city"
            >
              Internet Note
            </label>

            <textarea
              name="internet_note"
              value={apartDetails.internet_note ? apartDetails.internet_note : ""}
              onChange={handleInput}
              rows="4"
              placeholder="Internet Note"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-red-700 text-sm font-bold mb-2">
              KEY STORED IN OFFICE:
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-red-700 text-sm font-bold mb-2">
              KEY HANDOVER FOR CUSTOMER:
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Mechanical Keyboard Office
            </label>
            <input
              name="mechanical_key_office"
              value={apartDetails.mechanical_key_office ? apartDetails.mechanical_key_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Mechanical Keyboard Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Mechanical Keyboard Customer
            </label>
            <input
              name="mechanical_key_customer"
              value={apartDetails.mechanical_key_customer ? apartDetails.mechanical_key_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Mechanical Keyboard Customer"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Key PN1 Office
            </label>
            <input
              name="pn1_office"
              value={apartDetails.pn1_office ? apartDetails.pn1_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Key PN1 Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Key PN1 Customer
            </label>
            <input
              name="pn1_customer"
              value={apartDetails.pn1_customer ? apartDetails.pn1_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Key PN1 Customer"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Key PN2 Office
            </label>
            <input
              name="pn2_office"
              value={apartDetails.pn2_office ? apartDetails.pn2_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Key PN2 Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Key PN2 Customer
            </label>
            <input
              name="pn2_customer"
              value={apartDetails.pn2_customer ? apartDetails.pn2_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Key PN2 Customer"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Key PN3 Office
            </label>
            <input
              name="pn3_office"
              value={apartDetails.pn3_office ? apartDetails.pn3_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Key PN3 Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Key PN3 Customer
            </label>
            <input
              name="pn3_customer"
              value={apartDetails.pn3_customer ? apartDetails.pn3_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Key PN3 Customer"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Key PN4 Office
            </label>
            <input
              name="pn4_office"
              value={apartDetails.pn4_office ? apartDetails.pn4_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Key PN4 Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Key PN4 Customer
            </label>
            <input
              name="pn4_customer"
              value={apartDetails.pn4_customer ? apartDetails.pn4_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Key PN4 Customer"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Mailbox Office
            </label>
            <input
              name="mailbox_office"
              value={apartDetails.mailbox_office ? apartDetails.mailbox_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Mailbox Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Mailbox Customer
            </label>
            <input
              name="mailbox_customer"
              value={apartDetails.mailbox_customer ? apartDetails.mailbox_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Mailbox Customer"
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
              Note For Key
            </label>

            <textarea
              name="note_for_key"
              value={apartDetails.note_for_key ? apartDetails.note_for_key : ""}
              onChange={handleInput}
              rows="4"
              placeholder="Note For Key"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-red-700 text-sm font-bold mb-2">
              Card Stored In Office:
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-red-700 text-sm font-bold mb-2">
              Card Handover For Customer:
            </label>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Elevator Card Office
            </label>
            <input
              name="elevator_card_office"
              value={apartDetails.elevator_card_office ? apartDetails.elevator_card_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Elevator Card Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Elevator Card Customer
            </label>
            <input
              name="elevator_card_customer"
              value={apartDetails.elevator_card_customer ? apartDetails.elevator_card_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Elevator Card Customer"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Big Magnetic Card Office
            </label>
            <input
              name="big_magnetic_card_office"
              value={apartDetails.big_magnetic_card_office ? apartDetails.big_magnetic_card_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Big Magnetic Card Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Big Magnetic Card Customer
            </label>
            <input
              name="big_magnetic_card_customer"
              value={apartDetails.big_magnetic_card_customer ? apartDetails.big_magnetic_card_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Big Magnetic Card Customer"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Small Magnetic Card Office
            </label>
            <input
              name="small_magnetic_card_office"
              value={apartDetails.small_magnetic_card_office ? apartDetails.small_magnetic_card_office : ""}
              type="text"
              onChange={handleInput}
              placeholder="Small Magnetic Card Office"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 
              px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Small Magnetic Card Customer
            </label>
            <input
              name="small_magnetic_card_customer"
              value={apartDetails.small_magnetic_card_customer ? apartDetails.small_magnetic_card_customer : ""}
              type="text"
              onChange={handleInput}
              placeholder="Small Magnetic Card Customer"
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
              Air Condition Remote
            </label>

            <textarea
              name="air_condition_remote"
              value={apartDetails.air_condition_remote ? apartDetails.air_condition_remote : ""}
              onChange={handleInput}
              rows="4"
              placeholder="Air Condition Remote"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
            border border-gray-300 focus:ring-blue-50 focus:border-blue-500 
            dark:bg-gray-700 dark:border-gray-6 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2"
              htmlFor="grid-city"
            >
              Other Note
            </label>

            <textarea
              name="other_note"
              value={apartDetails.other_note ? apartDetails.other_note : ""}
              onChange={handleInput}
              rows="4"
              placeholder="Other Note"
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