import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import { Header } from "../../../components";
import { customStyles } from "../../../constants";
import * as ROUTES from "../../../constants";
import { numberWithCommas, formatDate } from "../../../helpers/function";

const Table = ({ filterApart, handleDeleteApart, setSearch }) => {
  const columnTable = [
    {
      name: <div>STT</div>,
      selector: (row, index) => index + 1,
      width: "8%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Apart Info</div>,
      selector: (row) => `${row.apart_code} ${row.agency_name}`,
      cell: (row) => (
        <div>
          <div>{row.apart_code}</div>
          <div>{row.agency_name}</div>
        </div>
      ),
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Area</div>,
      selector: (row) => `${row.area_apart}`,
      cell: (row) => <div>{row.area_apart}</div>,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Owner</div>,
      selector: (row) =>
        `${row.house_owner} ${row.phone_owner} ${row.email_owner}`,
      cell: (row) => (
        <div>
          <div>
            <b>{row.house_owner}</b>
          </div>
          <div>
            <span>{row.phone_owner}</span>
            <span>{row.email_owner}</span>
          </div>
        </div>
      ),
      width: "14%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Fee/Month</div>,
      selector: (row) => `${row.fee_per_month}`,
      cell: (row) => (
        <div>
          <div>
            {numberWithCommas(row.fee_per_month)} <sup>đ</sup>
          </div>
        </div>
      ),
      width: "13.5%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Owner Recieve</div>,
      selector: (row) => `${row.owner_recieved}`,
      cell: (row) => (
        <div>
          {numberWithCommas(row.owner_recieved)} <sup>đ</sup>
        </div>
      ),
      width: "12%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Duration</div>,
      selector: (row) => `${row.start_date} ${row.end_date}`,
      cell: (row) => (
        <div>
          {formatDate(row.start_date)} <br /> {formatDate(row.end_date)}
        </div>
      ),
      width: "12.5%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Payment Terms</div>,
      selector: (row) => `${row.payment_term}`,
      cell: (row) => <div>{row.payment_term} Month(s)</div>,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Customize</div>,
      cell: (row) => (
        <span className="text-center">
          <Link to={ROUTES.APART_RENTED_NO_TAX_DETAILS_ACTION + row.apart_code}>
            <button
              style={{ background: "#3b82f6" }}
              className="text-white mb-2 py-1 px-2 capitalize rounded-2xl text-md "
            >
              Details
            </button>
          </Link>
          <Link to={ROUTES.APART_RENTED_NO_TAX_EDIT_ACTION + row.apart_code}>
            <button className="text-white mb-2 py-1 px-2 capitalize rounded-2xl text-md bg-indigo-500">
              Editing
            </button>
          </Link>
          <button
            style={{ background: "#ee5e68" }}
            className="text-white py-1 px-2 mb-2 capitalize rounded-2xl text-md"
            onClick={() => {
              if (window.confirm("Are you sure to delete this item?"))
                handleDeleteApart(row.apart_code);
            }}
          >
            Delete
          </button>
        </span>
      ),
      width: "10%",
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment Rented No Tax" />

      <div>
        <DataTable
          title="LIST OF APARTMENT RENTED NO TAX"
          columns={columnTable}
          data={filterApart}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="900px"
          highlightOnHover
          subHeader
          subHeaderComponent={
            <input
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-64 pl-10 p-2.5
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          }
          subHeaderAlign="right"
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default Table;
