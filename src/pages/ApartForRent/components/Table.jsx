import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import { Header } from "../../../components";
import { customStyles } from "../../../constants";
import * as ROUTES from "../../../constants";
import { numberWithCommas } from "../../../helpers/function";
import TableStyle from "../../../assets/Table.module.css";

const Table = ({
  filterApart,
  handleDeleteApart,
  setSearch,
  listItemsPerPage,
  handleDisplayItemsPerPage,
  handleChoseCurrentPage,
  itemsPerPage,
  totalNumApart
}) => {
  const numberOfPage =
    Math.ceil(totalNumApart / itemsPerPage) === 0
      ? 1
      : Math.ceil(totalNumApart / itemsPerPage);

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
      width: "15%",
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
      width: "15%",
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
      width: "15%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Apart Details</div>,
      selector: (row) => `${row.bedroom} ${row.sqm} ${row.status_furniture}`,
      cell: (row) => (
        <div>
          <div>
            <span>{row.bedroom} - </span>
            <span>
              {row.sqm} m<sup>2</sup>
            </span>
            <div>{row.status_furniture}</div>
          </div>
        </div>
      ),
      width: "15%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
    {
      name: <div>Price</div>,
      selector: (row) => `${row.price}`,
      cell: (row) => (
        <div>
          {numberWithCommas(row.price)} <sup>đ</sup>
        </div>
      ),
      width: "15%",
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
          <Link to={ROUTES.APART_FOR_RENT_DETAILS_ACTION + row.apart_code}>
            <button
              style={{ background: "#3b82f6" }}
              className="text-white mb-2 py-1 px-2 capitalize rounded-2xl text-md "
            >
              Details
            </button>
          </Link>
          <Link to={ROUTES.APART_FOR_RENT_EDIT_ACTION + row.apart_code}>
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
      width: "17%",
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      },
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment For Rent" />

      <div>
        <DataTable
          title="LIST OF APARTMENT FOR RENT"
          columns={columnTable}
          data={filterApart}
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

        <div className={`${TableStyle.pagination_area} mt-2`}>
          <select
            name="items_per_page"
            id="small"
            onChange={(e) => handleDisplayItemsPerPage(e.target.value)}
            className="flex items-center w-15 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {listItemsPerPage.map((item) => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <div className="inline-flex rounded-xl">
            <ul className="flex items-center">
              <li key={"btn_previous"} className="px-2">
                <button
                  aria-disabled="true"
                  disabled=""
                  className="w-9 h-9 flex items-center justify-center rounded-md border disabled"
                >
                  <span>
                    <svg
                      width="8"
                      height="15"
                      viewBox="0 0 8 15"
                      className="fill-current stroke-current"
                    >
                      <path
                        d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                        strokeWidth="0.3"
                      ></path>
                    </svg>
                  </span>
                </button>
              </li>
              {Array.from({ length: numberOfPage }, (_, index) => {
                return (
                  <li key={index + 1} className="px-2">
                    <button
                      onClick={(e) => handleChoseCurrentPage(index + 1)}
                      className="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500 text-indigo-500"
                    >
                      {`${index + 1}`}
                    </button>
                  </li>
                );
              })}

              <li key={"btn_next"} className="px-2">
                <button
                  aria-disabled="false"
                  className="w-9 h-9 flex items-center justify-center rounded-md border hover:text-indigo-500"
                >
                  <span>
                    <svg
                      width="8"
                      height="15"
                      viewBox="0 0 8 15"
                      className="fill-current stroke-current"
                    >
                      <path
                        d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                        strokeWidth="0.3"
                      ></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
