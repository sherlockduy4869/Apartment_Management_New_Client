import React from 'react'
import { Header } from '../../components';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { customStyles } from '../../data/dummy';

const ApartForRent = () => {

  const [apartForRentList, setApartForRentList] = useState([])
  const [search, setSearch] = useState("")
  const [filterApartForRent, setFilterApartForRent] = useState([])

  /*get apartment for rent list*/
  useEffect(() => {
    const getNews = async () => {
      const apartForRentFromServer = await fetchApartForRent()
      setApartForRentList(apartForRentFromServer)
      setFilterApartForRent(apartForRentFromServer)
    }
    getNews()
  }, [])

  const fetchApartForRent = async () => {
    const res = await fetch('http://localhost/admin_api/public/api/v1/apartforrent')
    const data = await res.json()
    return data['data']
  }
  /*--------------*/

  /*sorting apartment for rent list*/
  useEffect(() => {
    const result = apartForRentList.filter(apartForRentList => {
      return apartForRentList.apartment_code.toLowerCase().match(search.toLowerCase())
        || apartForRentList.project_name.toLowerCase().match(search.toLowerCase())
        || apartForRentList.status.toLowerCase().match(search.toLowerCase())
        || apartForRentList.price.toString().match(search.toLowerCase())
        || apartForRentList.available_from.match(search)
        || apartForRentList.note.toLowerCase().match(search.toLowerCase())
        || apartForRentList.project_name.toLowerCase().match(search.toLowerCase())
    })
    setFilterApartForRent(result)
  }, [search])
  /*------------------*/

  const deleteApartForRent = async (id) => {
    await fetch(`http://localhost/admin_api/public/api/v1/apartforrent/${id}`, { method: `DELETE` })
    setApartForRentList(
      apartForRentList.filter((apartForRentList) => apartForRentList.id_apart_for_rent !== id)
    )
    setFilterApartForRent(
      filterApartForRent.filter((filterApartForRent) => filterApartForRent.id_apart_for_rent !== id)
    )
  }

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      width: "5%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Date Available",
      selector: 'status',
      cell: (row) => <div>{row.available_from}</div>,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Apartment Code",
      selector: 'apartment_code',
      cell: (row) => <div>{row.apartment_code}</div>,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Project",
      selector: 'project_name',
      cell: (row) => <div>{row.project_name}</div>,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Image",
      selector: (row) => <img style={{ width: "70%" }} src={row.image} alt="news-item" />,
      width: "15%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Status",
      selector: 'status',
      cell: (row) => <div>{row.status}</div>,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Price",
      sortable: true,
      selector: 'price',
      cell: (row) => <div className="py-1 px-2 font-medium text-md">
        {row.price}
      </div>,
      width: "10%",
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      }
    },
    {
      name: "Note",
      sortable: true,
      selector: 'note',
      cell: (row) => <div className="py-1 px-2 font-medium text-md">
        {row.note}
      </div>,
      width: "10%",
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      }
    },
    {
      name: "More",
      cell: (row) =>
        <span>

          <Link to={`/news/edit/${row.id_news}`}>
            <button style={{ background: '#4ade80' }}
              className="text-white py-1 px-2 mb-2 capitalize rounded-2xl text-md mr-1">
              Further
            </button>
          </Link>
          <Link to={`/news/edit/${row.id_news}`}>
            <button style={{ background: '#3b82f6' }}
              className="text-white py-1 px-2 capitalize rounded-2xl text-md ">
              Utilities
            </button>
          </Link>
        </span>,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Customize",
      cell: (row) =>
        <span>
          <button style={{ background: '#ee5e68' }}
            className="text-white py-1 px-2 mb-2 capitalize rounded-2xl text-md mr-1"
            onClick={() => {
              if (window.confirm('Are you sure to delete this item?'))
                deleteApartForRent(row.id_news)
            }}>
            Delete
          </button>
          <Link to={`/news/edit/${row.id_news}`}>
            <button className="text-white py-1 px-2 capitalize rounded-2xl text-md bg-indigo-500">
              Editing
            </button>
          </Link>
        </span>,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    }
  ]

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apartment For Rent" />

      <div>
        <DataTable
          title="LIST OF APARTMENT FOR RENT"
          columns={columns}
          data={filterApartForRent}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='900px'
          highlightOnHover
          actions=
          {<Link to={`/apartforrent/add`}>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>
              ADD APART
            </button>
          </Link>}
          subHeader
          subHeaderComponent=
          {<input value={search} placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            type="text" id="simple-search" class="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
          block w-64 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </input>}
          subHeaderAlign='right'
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default ApartForRent