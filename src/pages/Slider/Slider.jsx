import { Header } from '../../components';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { customStyles } from '../../data/dummy';

const Slider = () => {

  const [sliderList, setSliderList] = useState([])
  const [search, setSearch] = useState("")
  const [filterSlider, setFilterSlider] = useState([])

  /*get slider list*/
  useEffect(() => {
    const getSlider = async () => {
      const sliderFromServer = await fetchSlider()
      setSliderList(sliderFromServer)
      setFilterSlider(sliderFromServer)
    }
    getSlider()
  }, [])

  const fetchSlider = async () => {
    const url_slider_list = "http://localhost/admin_api/public/api/v1/sliders"
    const res = await fetch(url_slider_list)
    const data = await res.json()
    return data['data']
  }
  /*--------------*/

  /*sorting slider list*/
  useEffect(() => {
    const result = sliderList.filter(sliderList => {
      return sliderList.note_slider.toLowerCase().match(search.toLowerCase())
        || sliderList.status_slider.toLowerCase().match(search.toLowerCase())
    })
    setFilterSlider(result)
  }, [search])
  /*------------------*/

  const deleteSlider = async (id) => {
    const url_delete = "http://localhost/admin_api/public/api/v1/sliders/" + id
    await fetch(url_delete, { method: `DELETE` })
    setSliderList(sliderList.filter((sliderList) => sliderList.id_slider !== id))
    setFilterSlider(filterSlider.filter((filterSlider) => filterSlider.id_slider !== id))
  }

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      width: "10%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Image",
      selector: (row) => <img style={{ width: "70%" }} src={row.image_slider} alt="slider-item" />,
      width: "30%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Note",
      selector: 'note_slider',
      cell: (row) => <div>{row.note_slider}</div>,
      width: "20%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Status",
      sortable: true,
      selector: 'status_slider',
      cell: (row) =>
        <div
          style={row.status_slider == 'showing' ? { color: '#22c55e' } : { color: '#404040' }}
          className="text-white py-1 px-2 capitalize font-medium text-md">
          {row.status_slider}
        </div>,
      width: "20%",
      style: {
        padding: "10px 15px",
        justifyContent: "center",
      }
    },
    {
      name: "Customize",
      cell: (row) =>
        <button
          style={{ background: '#ee5e68' }}
          className="text-white py-1 px-2 capitalize rounded-2xl text-md mr-1"
          onClick={() => { if (window.confirm('Are you sure to delete this item?')) deleteSlider(row.id_slider) }}>
          Delete
        </button>,
      width: "20%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    }
  ]

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Slider" />

      <div>
        <DataTable
          title="LIST OF SLIDER"
          columns={columns}
          data={filterSlider}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='900px'
          highlightOnHover
          actions=
          {<Link to={`/slider/add`}>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>
              ADD SLIDER
            </button>
          </Link>}
          subHeader
          subHeaderComponent=
          {<input
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 pl-10 p-2.5  
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </input>}
          subHeaderAlign='right'
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};
export default Slider;
