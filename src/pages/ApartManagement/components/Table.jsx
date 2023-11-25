import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import { Header } from "../../../components";
import { customStyles } from "../../../constants";
import * as ROUTES from "../../../constants";
import { numberWithCommas } from "../../../helpers/function";

const Table = ({ filterApart, handleDeleteApart, setSearch }) => {
  const columnTable = [
    {
      name: <div>STT</div>,
      selector: (row, index) => index + 1,
      width: "7%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Apart Info</div>,
      selector: (row) => `${row.apart_code} ${row.area_apart}`,
      cell: (row) => (
        <div>
          <div><b>{row.apart_code}</b></div>
          <div>{row.area_apart}</div>
        </div>
        
      ),
      width: "9%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Owner</div>,
      selector: (row) => `${row.house_owner}`,
      cell: (row) => <div>{row.house_owner}</div>,
      width: "9.5%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Bedroom</div>,
      selector: (row) => `${row.bedroom}`,
      cell: (row) => <div>{row.bedroom}</div>,
      width: "11.5%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Fee</div>,
      selector: (row) => `${row.management_fee}`,
      cell: (row) => (
        <div>
          {numberWithCommas(row.management_fee)} <sup>đ</sup>
        </div>
      ),
      width: "8%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Electric Code</div>,
      selector: (row) => `${row.electric_code}`,
      cell: (row) => <div>{row.electric_code}</div>,
      width: "10.5%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Door Pass</div>,
      selector: (row) => `${row.door_pass}`,
      cell: (row) => <div>{row.door_pass}</div>,
      width: "8.5%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Internet Code</div>,
      selector: (row) => `${row.internet_code}`,
      cell: (row) => <div>{row.internet_code}</div>,
      width: "10.75%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Wifi Pass</div>,
      selector: (row) => `${row.wifi_pass}`,
      cell: (row) => <div>{row.wifi_pass}</div>,
      width: "8%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Note</div>,
      selector: (row) => `${row.other_note}`,
      cell: (row) => <div>{row.other_note}</div>,
      width: "8%",
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
          <Link to={ROUTES.APART_MANAGEMENT_DETAILS_ACTION + row.apart_code}>
            <button
              style={{ background: "#3b82f6" }}
              className="text-white mb-2 py-1 px-2 capitalize rounded-2xl text-md "
            >
              Details
            </button>
          </Link>
          <Link to={ROUTES.APART_MANAGEMENT_EDIT_ACTION + row.apart_code}>
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
      width: "10.25%",
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment Management" />

      <div>
        <DataTable
          title="LIST OF APARTMENT MANAGEMENT"
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
