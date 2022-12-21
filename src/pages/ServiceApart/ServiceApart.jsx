import React from 'react'
import { Header } from '../../components';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { customStyles } from '../../data/dummy';

const ServiceApart = () => {

  const [serviceApart, setServiceApart] = useState([])
  const [search, setSearch] = useState("")
  const [filterServiceApart, setFilterServiceApart] = useState([])

  /*get service apartment list*/
  useEffect(() => {
    const getServiceApart = async () => {
      const serviceApartFromServer = await fetchServiceApart()
      setServiceApart(serviceApartFromServer)
      setFilterServiceApart(serviceApartFromServer)
    }
    getServiceApart()
  }, [])

  const fetchServiceApart = async () => {
    const url_service_apart = "http://localhost/admin_api/public/api/v1/serviceapart"
    const res = await fetch(url_service_apart)
    const data = await res.json()
    return data['data']
  }
  /*--------------*/

  /*sorting service apartment list*/
  useEffect(() => {
    const result = serviceApart.filter(serviceApart => {
      return serviceApart.apartment_code.toLowerCase().match(search.toLowerCase())
        || serviceApart.project_name.toLowerCase().match(search.toLowerCase())
        || serviceApart.status.toLowerCase().match(search.toLowerCase())
        || serviceApart.price.toString().match(search.toLowerCase())
        || serviceApart.available_from.match(search)
        || serviceApart.note.toLowerCase().match(search.toLowerCase())
        || serviceApart.project_name.toLowerCase().match(search.toLowerCase())
    })
    setFilterServiceApart(result)
  }, [search])
  /*------------------*/

  /*formating data*/
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function formatDate(inputDate) {

    const dateArray = inputDate.split('-')

    const formatedDate = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0]

    return formatedDate
  }
  /*------------------*/

  const deleteServiceApart = async (id) => {
    const url_delete = "http://localhost/admin_api/public/api/v1/serviceapart/" + id
    await fetch(url_delete, { method: `DELETE` })
    setServiceApart(
      serviceApart.filter((serviceApart) => serviceApart.id_apartment !== id)
    )
    setFilterServiceApart(
      filterServiceApart.filter((filterServiceApart) => filterServiceApart.id_apartment !== id)
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
      name: "Available",
      selector: 'available_from',
      cell: (row) => <div>{formatDate(row.available_from)}</div>,
      width: "12%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Code",
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
      width: "12%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Image",
      selector: (row) => <img style={{ width: "100%" }} src={row.image} alt="news-item" />,
      width: "10%",
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
        {numberWithCommas(row.price)}
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
        <span className='text-center'>
          <Link 
          to={`/further/${row.id_apartment}`} 
          state={{purpose:"/serviceapart", code: row.apartment_code}}>
            <button
              style={{ background: '#4ade80' }}
              className="text-white py-1 px-2 mb-2 capitalize rounded-2xl text-md mr-1">
              Further
            </button>
          </Link>
          <Link 
          to={`/feature/${row.id_apartment}`}
          state={{purpose:"/serviceapart", code: row.apartment_code}}>
            <button
              style={{ background: '#3b82f6' }}
              className="text-white mb-2 py-1 px-2 capitalize rounded-2xl text-md ">
              Feature
            </button>
          </Link>
          <Link 
          to={`/images/${row.id_apartment}`}
          state={{purpose:"/serviceapart", code: row.apartment_code}}>
            <button
              style={{ background: '#8b5cf6' }}
              className="text-white py-1 px-2 capitalize rounded-2xl text-md ">
              Images
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
        <span className='text-center'>
          <button
            style={{ background: '#ee5e68' }}
            className="text-white py-1 px-2 mb-2 capitalize rounded-2xl text-md mr-1"
            onClick={() => {
              if (window.confirm('Are you sure to delete this item?'))
              deleteServiceApart(row.id_apartment)
            }}>
            Delete
          </button>
          <Link to={`/serviceapart/edit/${row.id_apartment}`}>
            <button
              className="text-white py-1 px-2 capitalize rounded-2xl text-md bg-indigo-500">
              Editing
            </button>
          </Link>
        </span>,
      width: "11%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    }
  ]

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Service Apartment" />

      <div>
        <DataTable
          title="LIST OF SERVICE APARTMENT"
          columns={columns}
          data={filterServiceApart}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='900px'
          highlightOnHover
          actions=
          {<Link to={`/serviceapart/add`}>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
            hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>
              ADD APART
            </button>
          </Link>}
          subHeader
          subHeaderComponent=
          {<input
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-blue-500 focus:border-blue-500 block w-64 pl-10 p-2.5  
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </input>}
          subHeaderAlign='right'
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default ServiceApart