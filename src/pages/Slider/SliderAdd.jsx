import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { Header } from '../../components';
import { Link } from 'react-router-dom';

const SliderAdd = () => {

  const url = "http://localhost/admin_api/public/api/v1/sliders";

  const [image, setImage] = useState("")
  const [note, setNote] = useState("")
  const [status, setStatus] = useState("showing")

  const [addStatus, setAddStatus] = useState("")
  const [errorImage, setErrorImage] = useState("")
  const [corlorMessage, setColorMessage] = useState("")

  const addingSlider = (e) => {

    e.preventDefault()

    const formData = new FormData()

    formData.append("image_slider", image)
    formData.append("note_slider", note)
    formData.append("status_slider", status)

    axios.post(url, formData)
      .then(res => {
        if (!res["data"]["status"]) {
          setColorMessage("#f43f5e")
        }
        setColorMessage("#22c55e")
        setErrorImage("")
        setAddStatus(res["data"]["message"])
      })
      .catch(error => {
        if (error['response']['data']['errors']['image_slider']) {
          setErrorImage(error['response']['data']['errors']['image_slider'][0])
        }
      });
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Slider" />

      <div className='text-2xl mb-2'>ADDING SLIDER</div>
      <Link to={'/slider'}>
        <button class="mb-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back To Slider List
        </button>
      </Link>

      <form class="w-full max-w-sm">

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Image
            </label>
          </div>
          <div class="md:w-2/3">
            <input onChange={(e) => setImage(e.target.files[0])}
              type="file" class="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
              focus:bg-white focus:border-purple-500"/>
            <div style={{ color: "#f43f5e" }}>
              {errorImage}
            </div>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Note
            </label>
          </div>
          <div class="md:w-2/3">
            <input onChange={(e) => setNote(e.target.value)}
              type="text" class="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
              focus:bg-white focus:border-purple-500"/>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Status
            </label>
          </div>
          <div class="md:w-2/3">
            <div class="relative">
              <select onChange={(e) => setStatus(e.target.value)}
                class="block appearance-none w-full bg-gray-200 border border-gray-200 
                text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none 
                focus:bg-white focus:border-gray-500">
                <option selected value="showing">showing</option>
                <option value="not-showing">not-showing</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <div className='mb-4' style={{ color: corlorMessage }}>
              {addStatus}
            </div>
            <button type="button" onClick={(e) => addingSlider(e)}
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
export default SliderAdd