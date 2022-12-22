import { useState } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


const ImagesAdd = () => {

  const [showElement, setShowElement] = useState(true)

  const { id } = useParams()
  const { state } = useLocation()
  const pathBack = '/images/' + id

  const title = "ADDING IMAGES FOR " + state.code

  const [imagesDescription, setImagesDescription] = useState("")

  const [addStatus, setAddStatus] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  const [errorImage, setErrorImage] = useState("")
  /*----------------*/

  const addingImages = (e) => {

    e.preventDefault()

    const formData = new FormData()
    const url_add = "http://localhost/admin_api/public/api/v1/images"

    formData.append("id_apartment", id)
    formData.append("image_description", imagesDescription)

    axios.post(url_add, formData)
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        setColorMessage("#22c55e")
        setErrorImage("")
        setAddStatus(res["data"]["message"]) 

        setShowElement(true)

        console.log(res)
      })
      .catch(error => {
        if (error['response']['data']['errors']['image_description']) {
          setErrorImage(error['response']['data']['errors']['image_description'][0])
        }
        else {
          setErrorImage("")
        }
        console.log(error)
      });

  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Images" />

      <div className='text-2xl mb-2'>{title}</div>
      <Link
        to={pathBack}
        state={{ purpose: state.purpose, code: state.code }}>
        <button
          class="mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
        hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back To Images List
        </button>
      </Link>

      <form 
      onClick={(e) => setShowElement(false)}
      class="w-full max-w-sm">

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Images
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              placeholder='Enter images here'
              onChange={(e) => setImagesDescription(e.target.value)}
              type="text"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 
              px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <div className='mb-4' style={{ color: corlorMessage }}>
              {showElement?addStatus:<></>} 
            </div>
            <button
              type="button"
              onClick={(e) => addingImages(e)}
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline 
              focus:outline-none text-white font-bold py-2 px-4 rounded">
              ADDING
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default ImagesAdd