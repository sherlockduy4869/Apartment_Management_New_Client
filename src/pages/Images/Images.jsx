import { Header } from '../../components';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { customStyles } from '../../data/dummy';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useStateContext } from './../../contexts/ContextProvider';

const Images = () => {

  const { currentColor } = useStateContext();

  const { id } = useParams()
  const { state } = useLocation()

  const path = state.purpose

  const titleImages = "Images Description Of " + state.code

  const [imagesList, setImagesList] = useState([])

  /*get project list*/
  useEffect(() => {
    const getImages = async () => {
      const imagesFrotmServer = await fetchImages()
      setImagesList(imagesFrotmServer)
    }
    getImages()
  }, [])

  const fetchImages = async () => {
    const url_images_list = "https://api.betterhomes.site/public/api/v1/images/" + id
    const res = await fetch(url_images_list)
    const data = await res.json()
    return data['data']
  }
  /*--------------*/

  const deleteImage = async (id) => {
    const url_delete = "https://api.betterhomes.site/public/api/v1/images/" + id
    await fetch(url_delete, { method: `DELETE` })
    setImagesList(imagesList.filter((imagesList) => imagesList.id_image_description !== id))
  }

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      width: "20%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Image",
      selector: 'image_description',
      cell: (row) => <img style={{ width: "70%" }} src={row.image_description} alt="image-item" />,
      width: "40%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    },
    {
      name: "Customize",
      cell: (row) =>
        <button
          style={{ background: '#ee5e68' }}
          className="text-white py-1 px-2 capitalize rounded-2xl text-md mr-1"
          onClick={() => 
          { if (window.confirm('Are you sure to delete this item?')) deleteImage(row.id_image_description) }}>
          Delete
        </button>,
      width: "40%",
      sortable: true,
      style: {
        padding: "10px 15px",
        justifyContent: "center"
      }
    }
  ]

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Images" />
      <Link to={path}>
        <button
          style={{ backgroundColor: currentColor }}
          class="mb-2 font-semibold text-white py-2 px-4 rounded">
          BACK TO APARTMENT
        </button>
      </Link>
      <div>
        <DataTable
          title={titleImages}
          columns={columns}
          data={imagesList}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='900px'
          highlightOnHover
          actions=
          {<Link 
          to={`/images/add/${id}`}
          state={{purpose:state.purpose, code: state.code}}>
            <button
              style={{ backgroundColor: currentColor }}
              className='font-semibold text-white py-1 px-2 rounded'>
              ADD IMAGES
            </button>
          </Link>}
          customStyles={customStyles}
        />
      </div>
    </div>
  )
}

export default Images